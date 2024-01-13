import { Avatar, Checkbox, Table, Tooltip } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { EmptyTodos, TodosLoading } from "../";
import { appRoutes } from "src/routes";
import { TodoStatusBadge, UserAvatar } from "src/components";
import dayjs from "src/utils/dayjs";
import { TodosListGetTodosQuery } from "../../graphql.generated";
import clsx from "clsx";
import { Todo } from "src/types/generated";

interface Props {
  selected: Todo["uuid"][];
  setSelected: React.Dispatch<React.SetStateAction<Todo["uuid"][]>>;
  todos?: TodosListGetTodosQuery["get_todos"]["data"];
  loading?: boolean;
  updating?: boolean;
}

export const TodosListBody: FC<Props> = ({
  todos,
  loading,
  selected,
  setSelected,
  updating,
}) => {
  const navigate = useNavigate();

  if (loading) return <TodosLoading />;
  if (!todos?.length) return <EmptyTodos />;

  return (
    <Table.Body>
      {todos?.map((todo) => (
        <Table.Row
          key={todo?.uuid}
          className={clsx("cursor-pointer", {
            "animate-pulse": selected.includes(todo?.uuid) && updating,
          })}
          onClick={() => {
            navigate(
              appRoutes.viewTodo.path.replace(":uuid", todo!.uuid.toString())
            );
          }}
        >
          <Table.Cell
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Checkbox
              checked={selected.includes(todo?.uuid)}
              onChange={(e) =>
                e.target.checked
                  ? setSelected((existing) => [...existing, todo?.uuid])
                  : setSelected((existing) =>
                      existing.filter((u) => u !== todo?.uuid)
                    )
              }
            />
          </Table.Cell>
          <Table.Cell>{todo?.title}</Table.Cell>
          <Table.Cell className="hidden md:table-cell">
            <Avatar.Group>
              {todo?.access?.data.map((a) => (
                <UserAvatar
                  user={a.user.data}
                  showStatus
                  size="sm"
                  button
                  tooltip
                />
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
          <Table.Cell>
            <TodoStatusBadge todo={todo} />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};
