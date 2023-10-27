import dayjs from "src/utils/dayjs";
import { Table, Tooltip } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FC, useMemo } from "react";
import { EmptyTodos, TodosLoading } from "../";
import { GetTodosQuery } from "../../graphql.generated";
import { appRoutes } from "src/routes";
import { TodoStatusBadge } from "src/components";

interface Props {
  todos?: GetTodosQuery["get_todos"];
  loading?: boolean;
}

export const TodosListBody: FC<Props> = ({ todos, loading }) => {
  const navigate = useNavigate();
  const sorted = useMemo(
    () =>
      (todos || []).sort((a, b) => {
        if (new Date(a?.created_at) > new Date(b?.created_at)) return -1;
        if (new Date(a?.created_at) < new Date(b?.created_at)) return 1;
        return 0;
      }),
    [todos]
  );

  if (loading) return <TodosLoading />;
  if (!todos?.length) return <EmptyTodos />;

  return (
    <Table.Body>
      {sorted?.map((todo) => (
        <Table.Row
          key={todo?.uuid}
          className="cursor-pointer"
          onClick={() => {
            navigate(
              appRoutes.viewTodo.path.replace(":uuid", todo?.uuid.toString())
            );
          }}
        >
          {/* <Table.Cell className="flex"> */}
          {/*   <Avatar size="sm" img={todo?.created_by.profile_img ?? ""} /> */}
          {/* </Table.Cell> */}
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
          <Table.Cell className="flex align-center justify-center align-center h-full">
            <TodoStatusBadge todo={todo} />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
};
