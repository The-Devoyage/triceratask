import { useEffect, useState } from "react";
import { Checkbox, Dropdown, Pagination, Select, Table } from "flowbite-react";
import { TodosListBody } from "./components";
import { userUuidVar } from "src/state";
import { createSearchParams, useSearchParams } from "react-router-dom";
import { Get_Todos_Input, Sort_Direction, Todo } from "src/types/generated";
import { useTodosListGetTodosLazyQuery } from "./graphql.generated";
import { useWindowSize } from "src/utils/useWindowSize";
import { useTodoListBulkUpdateMutation } from "./graphql.generated";
import { useToaster } from "src/utils/useToaster";

interface QueryParams extends Record<string, string | undefined> {
  completed?: string;
  page?: string;
  per_page?: string;
  sort?: string;
  order?: Sort_Direction;
}

export const List = () => {
  const [
    getTodos,
    { data, loading, variables },
  ] = useTodosListGetTodosLazyQuery({
    notifyOnNetworkStatusChange: true,
  });
  const { isMobile } = useWindowSize();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selected, setSelected] = useState<string[]>([]); // uuids of todos being updated
  const toaster = useToaster();
  const [updateTodo, { loading: updating }] = useTodoListBulkUpdateMutation();

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

    getTodos({
      variables: {
        get_todos_input: getTodosInput,
        get_todo_accesss_input: { query: { revoked: false } },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBulkEdit = (
    uuid: Todo["uuid"][],
    completed: Todo["completed"]
  ) => {
    updateTodo({
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
  };

  const handleFilter = (v: {
    completed?: boolean | null;
    sort?: string;
    order?: Sort_Direction;
  }) => {
    const searchParamsObj = Object.fromEntries(searchParams.entries());
    const query: QueryParams = {
      ...searchParamsObj,
    };
    if (v.completed === true || v.completed === false)
      query.completed = v.completed.toString();
    if (v.completed === null) delete query.completed;
    if (v.sort) query.sort = v.sort;
    if (v.order) query.order = v.order;
    const searchQuery = createSearchParams(
      Object.entries(query).reduce(
        (acc, [key, value]) => (value ? { ...acc, [key]: value } : acc),
        {}
      )
    );

    setSearchParams(searchQuery);

    getTodos({
      variables: {
        ...variables!,
        get_todos_input: {
          query: {
            ...variables?.get_todos_input?.query,
            completed: v.completed === null ? undefined : v.completed,
            access: {
              user: {
                uuid: userUuidVar(),
              },
              revoked: false,
            },
          },
          opts: {
            ...variables?.get_todos_input?.opts,
            per_page: variables?.get_todos_input?.opts?.per_page || 15,
            page: 1,
            sort: [
              {
                field:
                  v.sort ||
                  variables?.get_todos_input?.opts?.sort?.at(0)?.field,
                direction:
                  v.order ||
                  variables?.get_todos_input?.opts?.sort?.at(0)?.direction,
              },
            ],
          },
        },
      },
    });
  };

  const getSortDirection = (sortKey: string) => {
    if (variables?.get_todos_input?.opts?.sort?.at(0)?.field === sortKey) {
      return variables?.get_todos_input?.opts?.sort?.at(0)?.direction ===
        Sort_Direction.Desc
        ? "▼"
        : "▲";
    }
    return "";
  };

  return (
    <>
      <Table
        hoverable
        style={{
          minHeight: isMobile ? "calc(100vh - 9rem)" : "calc(100vh - 10rem)",
        }}
        theme={{
          root: {
            base: "rounded-lg overflow-hidden shadow-md w-full",
          },
        }}
      >
        <Table.Head>
          <Table.HeadCell>
            <Dropdown
              label={
                <Checkbox
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelected(
                        data?.get_todos.data.map((t) => t.uuid) || []
                      );
                    } else {
                      setSelected([]);
                    }
                  }}
                />
              }
              inline
              theme={{
                inlineWrapper:
                  "flex flex-row items-center justify-center w-full",
              }}
            >
              <Dropdown.Item
                onClick={() => handleBulkEdit(selected, true)}
                disabled={selected.length === 0}
              >
                Mark Completed
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => handleBulkEdit(selected, false)}
                disabled={selected.length === 0}
              >
                Mark Incomplete
              </Dropdown.Item>
            </Dropdown>
          </Table.HeadCell>
          <Table.HeadCell
            className="w-2/5 text-left"
            role="button"
            onClick={() =>
              handleFilter({
                completed: variables?.get_todos_input?.query.completed,
                sort: "todo.title",
                order:
                  variables?.get_todos_input?.opts?.sort?.at(0)?.field ===
                    "todo.title" &&
                  variables?.get_todos_input?.opts?.sort?.at(0)?.direction ===
                    Sort_Direction.Desc
                    ? Sort_Direction.Asc
                    : Sort_Direction.Desc,
              })
            }
          >
            Title
            {getSortDirection("todo.title")}
          </Table.HeadCell>
          <Table.HeadCell className="text-left hidden md:table-cell">
            Team
          </Table.HeadCell>
          <Table.HeadCell
            className="hidden md:table-cell text-left cursor-pointer"
            role="button"
            onClick={() =>
              handleFilter({
                completed: variables?.get_todos_input?.query.completed,
                sort: "todo.created_at",
                order:
                  variables?.get_todos_input?.opts?.sort?.at(0)?.field ===
                    "todo.created_at" &&
                  variables?.get_todos_input?.opts?.sort?.at(0)?.direction ===
                    Sort_Direction.Desc
                    ? Sort_Direction.Asc
                    : Sort_Direction.Desc,
              })
            }
          >
            Created At
            {getSortDirection("todo.created_at")}
          </Table.HeadCell>
          <Table.HeadCell
            className="hidden md:table-cell text-left"
            role="button"
            onClick={() =>
              handleFilter({
                completed: variables?.get_todos_input?.query.completed,
                sort: "todo.updated_at",
                order:
                  variables?.get_todos_input?.opts?.sort?.at(0)?.field ===
                    "todo.updated_at" &&
                  variables?.get_todos_input?.opts?.sort?.at(0)?.direction ===
                    Sort_Direction.Desc
                    ? Sort_Direction.Asc
                    : Sort_Direction.Desc,
              })
            }
          >
            Updated At
            {getSortDirection("todo.updated_at")}
          </Table.HeadCell>
          <Table.HeadCell className="text-center">
            <Dropdown
              label={
                variables?.get_todos_input?.query.completed !== undefined
                  ? variables.get_todos_input.query.completed
                    ? "Completed"
                    : "Not Complete"
                  : "All"
              }
              inline
              theme={{
                inlineWrapper:
                  "flex flex-row items-center justify-center w-full",
              }}
            >
              <Dropdown.Item onClick={() => handleFilter({ completed: true })}>
                Completed
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleFilter({ completed: false })}>
                Not Complete
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() =>
                  handleFilter({
                    completed: null,
                  })
                }
              >
                All
              </Dropdown.Item>
            </Dropdown>
          </Table.HeadCell>
        </Table.Head>
        <TodosListBody
          todos={data?.get_todos.data}
          loading={loading}
          updating={updating}
          selected={selected}
          setSelected={setSelected}
        />
      </Table>
      <div className="flex justify-between">
        <Select
          className="mt-2"
          sizing="sm"
          value={variables?.get_todos_input?.opts?.per_page || 15}
          onChange={(e) =>
            getTodos({
              fetchPolicy: "cache-first",
              onCompleted: () => window.scrollTo(0, 0),
              variables: {
                ...variables!,
                get_todos_input: {
                  query: {
                    ...variables?.get_todos_input.query,
                  },
                  opts: {
                    ...variables?.get_todos_input.opts,
                    per_page: parseInt(e.currentTarget.value),
                    page: 1,
                  },
                },
              },
            })
          }
        >
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </Select>
        <Pagination
          currentPage={data?.get_todos.meta?.page || 1}
          totalPages={data?.get_todos.meta?.total_pages || 1}
          layout={isMobile ? "navigation" : "pagination"}
          showIcons
          onPageChange={(page) =>
            getTodos({
              fetchPolicy: "cache-first",
              onCompleted: () => window.scrollTo(0, 0),
              variables: {
                ...variables!,
                get_todos_input: {
                  query: {
                    ...variables?.get_todos_input.query,
                  },
                  opts: {
                    ...variables?.get_todos_input.opts,
                    per_page: variables?.get_todos_input.opts?.per_page || 15,
                    page,
                  },
                },
              },
            })
          }
        />
      </div>
    </>
  );
};
