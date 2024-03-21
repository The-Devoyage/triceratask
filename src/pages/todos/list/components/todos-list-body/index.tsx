import { Avatar, Checkbox, Table, Tooltip } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { EmptyTodos, TodosLoading } from "../";
import { appRoutes } from "src/routes";
import { TodoStatusBadge, UserAvatar } from "src/components";
import dayjs from "src/utils/dayjs";
import clsx from "clsx";
import { TodosListContext } from "../../provider";

export const TodosListBody = () => {
  const navigate = useNavigate();
  const { getTodos, selected, updateTodos, setSelected } = useContext(
    TodosListContext
  );
  const { loading: updating } = updateTodos?.[1] || {};
  const { loading, data, called } = getTodos?.[1] || {};
  const todos = data?.get_todos.data;

  if (loading && !called) {
    return (
      <Table.Body>
        <TodosLoading />
      </Table.Body>
    );
  }

  if (!todos?.length) {
    return (
      <Table.Body>
        <EmptyTodos />
      </Table.Body>
    );
  }

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
                  key={a.user.data?.uuid}
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
