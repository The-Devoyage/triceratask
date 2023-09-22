import { useEffect } from "react";
import { Dropdown, Table } from "flowbite-react";
import { TodosListBody } from "./components";
import { useGetTodosLazyQuery } from "./graphql.generated";
import { userUuidVar } from "src/state";
import { useLocation } from "react-router-dom";

export const List = () => {
  const [getTodos, { data, loading, variables }] = useGetTodosLazyQuery();
  const locationState: { state: { completed?: boolean } } = useLocation();

  useEffect(() => {
    getTodos({
      variables: {
        get_todos_input: {
          completed:
            locationState && locationState?.state?.completed !== undefined
              ? locationState.state.completed
              : false,
          created_by: userUuidVar(),
        },
      },
      fetchPolicy: "cache-and-network",
    });
  }, [getTodos, locationState]);

  const handleFilter = (v: { completed?: boolean }) => {
    getTodos({
      variables: {
        get_todos_input: {
          completed: v.completed,
          created_by: userUuidVar(),
        },
      },
    });
  };

  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell className="w-2/5">Title</Table.HeadCell>
        <Table.HeadCell className="hidden md:table-cell">
          Created At
        </Table.HeadCell>
        <Table.HeadCell className="hidden md:table-cell">
          Updated At
        </Table.HeadCell>
        <Table.HeadCell className="text-center">
          <Dropdown
            label={
              variables?.get_todos_input?.completed !== undefined
                ? variables.get_todos_input.completed
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
