import dayjs from "src/utils/dayjs";
import { Badge, Table, Tooltip } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { EmptyTodos, TodosLoading } from "../";
import { GetTodosQuery } from "../../graphql.generated";
import { appRoutes } from "src/routes";

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
      {todos
        ?.sort((a, b) => (dayjs(a?.created_at) > dayjs(b.created_at) ? -1 : 1))
        .map((todo) => (
          <Table.Row
            key={todo?.id}
            className="cursor-pointer"
            onClick={() => {
              console.log(appRoutes.editTodo.path.replace(":id", "12345"));
              navigate(
                appRoutes.editTodo.path.replace(":id", todo?.id.toString())
              );
            }}
          >
            <Table.Cell>{todo?.id}</Table.Cell>
            <Table.Cell>{todo?.title}</Table.Cell>
            <Table.Cell className="hidden md:table-cell">
              <Tooltip
                content={dayjs
                  .tz(todo?.created_at)
                  .local()
                  .format("MMMM D, YYYY h:mm A")}
              >
                {dayjs.tz().to(dayjs.tz(todo?.created_at))}
              </Tooltip>
            </Table.Cell>
            <Table.Cell className="hidden md:table-cell">
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
