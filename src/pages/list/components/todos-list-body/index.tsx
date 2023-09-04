import dayjs from "src/utils/dayjs";
import { Badge, Table, Tooltip } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { EmptyTodos, TodosLoading } from "../";
import { GetTodosQuery } from "../../graphql.generated";

interface Props {
  todos?: GetTodosQuery["get_todos"];
  loading?: boolean;
}

export const TodosListBody: FC<Props> = ({ todos, loading }) => {
  const navigate = useNavigate();

  if (loading) return <TodosLoading />;
  if (!todos?.length) return <EmptyTodos />;

  return (
    <Table.Body>
      {todos?.map((todo) => (
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
                        .tz(todo?.completed_at ?? "")
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
  );
};
