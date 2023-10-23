import { Badge, Card } from "flowbite-react";
import { TodoStats, TodosCompletedChart } from "./components";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "src/routes";
import { userUuidVar } from "src/state";
import { useGetTodosQuery } from "../todos/list/graphql.generated";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { data } = useGetTodosQuery({
    variables: {
      get_todos_input: {
        query: {
          created_by: userUuidVar(),
        },
      },
    },
    fetchPolicy: "cache-and-network",
  });
  const todos = data?.get_todos ?? [];

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        <Card>
          <div className="flex flex-row justify-between">
            <h4 className="text-xl font-bold">My Todos</h4>
            <Badge>This Week</Badge>
          </div>
          <TodosCompletedChart todos={todos} />
        </Card>
        <div className="grid grid-cols-2 gap-4">
          <TodoStats
            label="Total Todos"
            total={todos.length ?? 0}
            onClick={() =>
              navigate(appRoutes.listTodos.path, { state: { completed: null } })
            }
          />
          <TodoStats
            label="Not Complete"
            total={todos.filter((todo) => !todo.completed).length ?? 0}
            onClick={() =>
              navigate(appRoutes.listTodos.path, {
                state: { completed: false },
              })
            }
          />
          <TodoStats
            label="Complete"
            total={todos.filter((t) => t.completed).length}
            onClick={() =>
              navigate(appRoutes.listTodos.path, { state: { completed: true } })
            }
          />
        </div>
      </div>
    </>
  );
};
