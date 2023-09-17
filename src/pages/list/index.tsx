import { useEffect } from "react";
import { Checkbox, Table, Tooltip } from "flowbite-react";
import { TodosListBody } from "./components";
import { useGetTodosLazyQuery } from "./graphql.generated";
import { userUuidVar } from "src/state";

export const List = () => {
  const [getTodos, { data, loading }] = useGetTodosLazyQuery();

  useEffect(() => {
    getTodos({
      variables: {
        get_todos_input: {
          completed: false,
          created_by: userUuidVar(),
        },
      },
      fetchPolicy: "cache-and-network",
    });
  }, [getTodos]);

  const handleFilter = (checked: boolean) => {
    if (!checked) {
      return getTodos({
        variables: {
          get_todos_input: {
            completed: false,
            created_by: userUuidVar(),
          },
        },
      });
    } else {
      getTodos({
        variables: {
          get_todos_input: {
            created_by: userUuidVar(),
          },
        },
      });
    }
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
          <Tooltip content="Show Completed" theme={{ target: "w-full" }}>
            Show Completed
            <Checkbox
              className="ml-2"
              onChange={(e) => {
                handleFilter(e.target.checked);
              }}
            />
          </Tooltip>
        </Table.HeadCell>
      </Table.Head>
      <TodosListBody todos={data?.get_todos} loading={loading} />
    </Table>
  );
};
