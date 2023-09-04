import { useEffect } from "react";
import { Badge, Checkbox, Table, Tooltip } from "flowbite-react";
import dayjs from "src/utils/dayjs";
import { useNavigate } from "react-router-dom";
import { useGetTodosLazyQuery } from "./list.generated";

export const List = () => {
  const navigate = useNavigate();
  const [getTodos, { data }] = useGetTodosLazyQuery();

  useEffect(() => {
    getTodos({
      variables: {
        get_todos_input: {
          completed: false,
        },
      },
    });
  }, [getTodos]);

  const handleFilter = (checked: boolean) => {
    if (!checked) {
      return getTodos({
        variables: {
          get_todos_input: {
            completed: false,
          },
        },
      });
    } else {
      getTodos({
        variables: {
          get_todos_input: {},
        },
      });
    }
  };

  return (
    <Table hoverable>
      <Table.Head>
        <Table.HeadCell className="w-5">ID</Table.HeadCell>
        <Table.HeadCell className="w-3/5">Title</Table.HeadCell>
        <Table.HeadCell>Created At</Table.HeadCell>
        <Table.HeadCell>Updated At</Table.HeadCell>
        <Table.HeadCell className="text-center">
          <Tooltip content="Show Completed" theme={{ target: "w-full" }}>
            <Checkbox
              onChange={(e) => {
                handleFilter(e.target.checked);
              }}
            />
          </Tooltip>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body>
        {data?.get_todos?.map((todo) => (
          <Table.Row
            key={todo?.id}
            className="cursor-pointer"
            onClick={() => navigate(`/edit/${todo?.id}}`)}
          >
            <Table.Cell>{todo?.id}</Table.Cell>
            <Table.Cell>{todo?.title}</Table.Cell>
            <Table.Cell>
              <Tooltip
                content={dayjs
                  .tz(todo?.created_at)
                  .local()
                  .format("MMMM D, YYYY h:mm A")}
              >
                {dayjs.tz().to(dayjs.tz(todo?.created_at))}
              </Tooltip>
            </Table.Cell>
            <Table.Cell>
              <Tooltip
                content={dayjs
                  .tz(todo?.updated_at)
                  .local()
                  .format("MMMM D, YYYY h:mm A")}
              >
                {dayjs.tz().to(dayjs.tz(todo?.updated_at))}
              </Tooltip>
            </Table.Cell>
            <Table.Cell className="text-center">
              <Badge
                color={todo?.completed ? "success" : "info"}
                className="flex justify-center"
              >
                <Tooltip
                  content={
                    todo?.completed
                      ? dayjs
                          .tz(todo?.completed_at)
                          .local()
                          .format("MMMM D, YYYY h:mm A")
                      : "No due date set."
                  }
                >
                  {todo?.completed ? "Completed" : "Pending"}
                </Tooltip>
              </Badge>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};
