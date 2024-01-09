import { useEffect } from "react";
import { Dropdown, Pagination, Select, Table } from "flowbite-react";
import { TodosListBody } from "./components";
import { userUuidVar } from "src/state";
import { useLocation } from "react-router-dom";
import { Get_Todos_Input } from "src/types/generated";
import { useTodosListGetTodosLazyQuery } from "./graphql.generated";
import { useWindowSize } from "src/utils/useWindowSize";

export const List = () => {
  const [
    getTodos,
    { data, loading, variables },
  ] = useTodosListGetTodosLazyQuery({
    notifyOnNetworkStatusChange: true,
  });
  const locationState: { state: { completed?: boolean } } = useLocation();
  const { isMobile } = useWindowSize();

  useEffect(() => {
    let getTodosInput: Get_Todos_Input = {
      opts: {
        per_page: variables?.get_todos_input?.opts?.per_page || 15,
        page: 1,
      },
      query: {
        completed: false,
        access: {
          user: {
            uuid: userUuidVar(),
          },
          revoked: false,
        },
      },
    };

    if (
      locationState?.state?.completed !== undefined &&
      locationState?.state?.completed !== null
    ) {
      getTodosInput = {
        opts: {
          per_page: variables?.get_todos_input?.opts?.per_page || 15,
          page: 1,
        },
        query: {
          ...getTodosInput.query,
          completed: locationState?.state?.completed,
        },
      };
    } else if (locationState?.state?.completed === null) {
      delete getTodosInput.query.completed;
    }

    getTodos({
      variables: {
        get_todos_input: getTodosInput,
        get_todo_accesss_input: { query: { revoked: false } },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getTodos, locationState]);

  const handleFilter = (v: { completed?: boolean }) => {
    getTodos({
      variables: {
        get_todo_accesss_input: {
          query: {
            revoked: false,
          },
        },
        get_todos_input: {
          query: {
            completed: v.completed,
            access: {
              user: {
                uuid: userUuidVar(),
              },
              revoked: false,
            },
          },
          opts: {
            per_page: variables?.get_todos_input?.opts?.per_page || 15,
            page: 1,
          },
        },
      },
    });
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
          <Table.HeadCell className="w-2/5 text-left">Title</Table.HeadCell>
          <Table.HeadCell className="text-left">Team</Table.HeadCell>
          <Table.HeadCell className="hidden md:table-cell text-left">
            Created At
          </Table.HeadCell>
          <Table.HeadCell className="hidden md:table-cell text-left">
            Updated At
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
              <Dropdown.Item onClick={() => handleFilter({})}>
                All
              </Dropdown.Item>
            </Dropdown>
          </Table.HeadCell>
        </Table.Head>
        <TodosListBody todos={data?.get_todos.data} loading={loading} />
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
