import { Avatar, Table, Tooltip } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { EmptyTodos, TodosLoading } from "../";
import { appRoutes } from "src/routes";
import { TodoStatusBadge, UserAvatar } from "src/components";
import dayjs from "src/utils/dayjs";
import { TodosListGetTodosQuery } from "../../graphql.generated";

interface Props {
  todos?: TodosListGetTodosQuery["get_todos"];
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
          key={todo?.uuid}
          className="cursor-pointer align-top"
          onClick={() => {
            navigate(
              appRoutes.viewTodo.path.replace(":uuid", todo!.uuid.toString())
            );
          }}
        >
          <Table.Cell>{todo?.title}</Table.Cell>
          <Table.Cell>
            <Avatar.Group>
              {todo?.access?.map((a) => (
                <UserAvatar user={a.user} showStatus size="sm" button tooltip />
              ))}
            </Avatar.Group>
          </Table.Cell>
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
          <Table.Cell className="flex align-center justify-center align-center h-full">
            <TodoStatusBadge todo={todo} />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};
