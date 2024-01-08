import { useEffect } from "react";
import { Dropdown, Pagination, Table } from "flowbite-react";
import { TodosListBody } from "./components";
import { userUuidVar } from "src/state";
import { useLocation } from "react-router-dom";
import { Get_Todos_Input } from "src/types/generated";
import { useTodosListGetTodosLazyQuery } from "./graphql.generated";

export const List = () => {
  const [
    getTodos,
    { data, loading, variables, fetchMore },
  ] = useTodosListGetTodosLazyQuery();
  const locationState: { state: { completed?: boolean } } = useLocation();

  useEffect(() => {
    let getTodosInput: Get_Todos_Input = {
      opts: {
        per_page: 20,
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
          per_page: 20,
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
        get_user_input: { query: {} },
        get_todos_input: getTodosInput,
        get_todo_accesss_input: { query: { revoked: false } },
      },
      fetchPolicy: "cache-and-network",
    });
  }, [getTodos, locationState]);

  const handleFilter = (v: { completed?: boolean }) => {
    getTodos({
      variables: {
        get_user_input: { query: {} },
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
            per_page: 20,
            page: 1,
          },
        },
      },
    });
  };

  return (
    <>
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="w-2/5">Title</Table.HeadCell>
          <Table.HeadCell>Team</Table.HeadCell>
          <Table.HeadCell className="hidden md:table-cell">
            Created At
          </Table.HeadCell>
          <Table.HeadCell className="hidden md:table-cell">
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
      <div className="flex justify-end">
        <Pagination
          currentPage={data?.get_todos.meta?.page || 1}
          totalPages={data?.get_todos.meta?.total_pages || 1}
          onPageChange={(page) =>
            fetchMore({
              variables: {
                get_todos_input: {
                  query: {
                    ...variables?.get_todos_input.query,
                  },
                  opts: {
                    per_page: 20,
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
