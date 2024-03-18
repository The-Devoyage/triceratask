import {
  FC,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  useTodoListBulkUpdateMutation,
  useTodosListGetTodosLazyQuery,
} from "./graphql.generated";
import {
  Get_Todos_Input,
  Options_Input,
  Sort_Direction,
  Todo,
} from "src/types/generated";
import { userUuidVar } from "src/state";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { useToaster } from "src/utils/useToaster";

export interface HandleFilterParams {
  completed?: boolean | null;
  sort?: string;
  order?: Sort_Direction;
}

interface QueryParams extends Record<string, string | undefined> {
  completed?: string;
  page?: string;
  per_page?: string;
  sort?: string;
  order?: Sort_Direction;
}

export interface TodosListContext {
  updateTodos: ReturnType<typeof useTodoListBulkUpdateMutation> | null;
  getTodos: ReturnType<typeof useTodosListGetTodosLazyQuery> | null;
  handlePagination: (paginationParams: Options_Input) => void;
  createSearchQuery: (
    filterParams?: HandleFilterParams,
    paginationParams?: Options_Input
  ) => void;
  selected: string[];
  setSelected: React.Dispatch<React.SetStateAction<string[]>>;
  handleFilter: (v: HandleFilterParams) => void;
  handleBulkEdit: (uuid: Todo["uuid"][], completed: Todo["completed"]) => void;
}

export const TodosListContext = createContext<TodosListContext>({
  updateTodos: null,
  getTodos: null,
  selected: [],
  setSelected: () => null,
  handlePagination: () => null,
  createSearchQuery: () => null,
  handleFilter: () => null,
  handleBulkEdit: () => null,
});

interface TodosListProviderProps {
  children: React.ReactNode;
}

export const TodosListProvider: FC<TodosListProviderProps> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const getTodos = useTodosListGetTodosLazyQuery({
    notifyOnNetworkStatusChange: true,
  });
  const updateTodos = useTodoListBulkUpdateMutation();
  const [selected, setSelected] = useState<string[]>([]); // uuids of todos being updated
  const toaster = useToaster();

  useEffect(() => {
    const getTodosInput: Get_Todos_Input = {
      opts: {
        per_page: parseInt(searchParams.get("per_page") || "15"),
        page: parseInt(searchParams.get("page") || "1"),
        sort: [
          {
            field: searchParams.get("sort") || "todo.created_at",
            direction:
              (searchParams.get("order") as Sort_Direction) ||
              Sort_Direction.Desc,
          },
        ],
      },
      query: {
        completed: searchParams.has("completed")
          ? searchParams.get("completed") === "true"
          : undefined,

        access: {
          user: {
            uuid: userUuidVar(),
          },
          revoked: false,
        },
      },
    };

    getTodos[0]({
      variables: {
        get_todos_input: getTodosInput,
        get_todo_accesss_input: { query: { revoked: false } },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createSearchQuery = useCallback(
    (filterParams?: HandleFilterParams, paginationParams?: Options_Input) => {
      const searchParamsObj = Object.fromEntries(searchParams.entries());
      const query: QueryParams = {
        ...searchParamsObj,
      };
      if (filterParams?.completed === true || filterParams?.completed === false)
        query.completed = filterParams.completed.toString();
      if (filterParams?.completed === null) delete query.completed;
      if (filterParams?.sort) query.sort = filterParams.sort;
      if (filterParams?.order) query.order = filterParams.order;
      if (paginationParams?.page) query.page = paginationParams.page.toString();
      if (paginationParams?.per_page) {
        query.per_page = paginationParams.per_page.toString();
      }
      const searchQuery = createSearchParams(
        Object.entries(query).reduce(
          (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
          {}
        )
      );

      setSearchParams(searchQuery);
    },
    [searchParams, setSearchParams]
  );

  const handlePagination = useCallback(
    (paginationParams: Options_Input) => {
      createSearchQuery(undefined, paginationParams);
      getTodos[0]({
        fetchPolicy: "cache-first",
        onCompleted: () => window.scrollTo(0, 0),
        variables: {
          ...getTodos[1].variables!,
          get_todos_input: {
            query: {
              ...getTodos[1].variables?.get_todos_input.query,
            },
            opts: {
              ...getTodos[1].variables?.get_todos_input.opts,
              per_page:
                paginationParams.per_page ||
                getTodos[1].variables?.get_todos_input.opts?.per_page ||
                15,
              page:
                paginationParams.page ||
                getTodos[1].variables?.get_todos_input.opts?.page ||
                1,
            },
          },
        },
      });
    },
    [createSearchQuery, getTodos]
  );

  const handleFilter = useCallback(
    (v: HandleFilterParams) => {
      createSearchQuery(v);
      getTodos[0]({
        variables: {
          ...getTodos[1].variables!,
          get_todos_input: {
            query: {
              ...getTodos[1].variables?.get_todos_input?.query,
              completed: v.completed === null ? undefined : v.completed,
              access: {
                user: {
                  uuid: userUuidVar(),
                },
                revoked: false,
              },
            },
            opts: {
              ...getTodos[1].variables?.get_todos_input?.opts,
              per_page:
                getTodos[1].variables?.get_todos_input?.opts?.per_page || 15,
              page: 1,
              sort: [
                {
                  field:
                    v.sort ||
                    getTodos[1].variables?.get_todos_input?.opts?.sort?.at(0)
                      ?.field,
                  direction:
                    v.order ||
                    getTodos[1].variables?.get_todos_input?.opts?.sort?.at(0)
                      ?.direction,
                },
              ],
            },
          },
        },
      });
    },
    [createSearchQuery, getTodos]
  );

  const handleBulkEdit = useCallback(
    (uuid: Todo["uuid"][], completed: Todo["completed"]) => {
      updateTodos[0]({
        variables: {
          update_todos_input: {
            query: {
              OR: uuid.map((u) => ({ uuid: u })),
            },
            values: {
              completed,
            },
          },
        },
        onCompleted: () => {
          setSelected([]);
          toaster.addToast("success", "Todo updated!");
        },
        onError: () => {
          toaster.addToast("error", "Todo update failed!");
        },
      });
    },
    [toaster, updateTodos]
  );

  const value = useMemo(
    () => ({
      updateTodos,
      getTodos,
      handlePagination,
      createSearchQuery,
      selected,
      setSelected,
      handleFilter,
      handleBulkEdit,
    }),
    [
      updateTodos,
      getTodos,
      handlePagination,
      createSearchQuery,
      selected,
      handleFilter,
      handleBulkEdit,
    ]
  );

  return (
    <TodosListContext.Provider value={value}>
      {children}
    </TodosListContext.Provider>
  );
};
