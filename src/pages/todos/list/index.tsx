import { useEffect } from "react";
import { Dropdown, Table } from "flowbite-react";
import { TodosListBody } from "./components";
import { useGetTodosLazyQuery } from "./graphql.generated";
import { userUuidVar } from "src/state";
import { useLocation } from "react-router-dom";
import { Get_Todos_Input } from "src/types/generated";

export const List = () => {
  const [getTodos, { data, loading, variables }] = useGetTodosLazyQuery();
  const locationState: { state: { completed?: boolean } } = useLocation();

  useEffect(() => {
    let getTodosInput: Get_Todos_Input = {
      query: {
        created_by: userUuidVar(),
        completed: false,
      },
    };

    if (
      locationState &&
      locationState?.state?.completed !== undefined &&
      locationState?.state?.completed !== null
    ) {
      getTodosInput = {
        query: {
          ...getTodosInput.query,
          completed: locationState?.state?.completed,
        },
      };
    }

    getTodos({
      variables: {
        get_user_input: { query: {} },
        get_todos_input: getTodosInput,
      },
      fetchPolicy: "cache-and-network",
    });
  }, [getTodos, locationState]);

  const handleFilter = (v: { completed?: boolean }) => {
    getTodos({
      variables: {
        get_user_input: { query: {} },
        get_todos_input: {
          query: {
            completed: v.completed,
            created_by: userUuidVar(),
          },
        },
      },
    });
  };

  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell className="w-2/5">Title</Table.HeadCell>
        <Table.HeadCell>Owner</Table.HeadCell>
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
              inlineWrapper: "flex flex-row items-center justify-center w-full",
            }}
          >
            <Dropdown.Item onClick={() => handleFilter({ completed: true })}>
              Completed
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter({ completed: false })}>
              Not Complete
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleFilter({})}>All</Dropdown.Item>
          </Dropdown>
        </Table.HeadCell>
      </Table.Head>
      <TodosListBody todos={data?.get_todos} loading={loading} />
    </Table>
  );
};
