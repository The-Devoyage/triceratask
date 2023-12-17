import { Badge, Card } from "flowbite-react";
import { TodoStats, TodosCompletedChart } from "./components";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "src/routes";
import { userUuidVar } from "src/state";
import { useDashboardGetTodosQuery } from "./graphql.generated";
import clsx from "clsx";

export const Dashboard = () => {
  const navigate = useNavigate();
  const { data, loading } = useDashboardGetTodosQuery({
    variables: {
      get_user_input: {
        query: {},
      },
      get_todos_input: {
        query: {
          access: {
            user: { uuid: userUuidVar() },
            revoked: false,
          },
        },
      },
    },
    fetchPolicy: "cache-and-network",
  });
  const todos = data?.get_todos ?? [];

  return (
    <>
      <div
        className={clsx("grid gap-4 sm:grid-cols-1 md:grid-cols-2", {
          "animate-pulse": loading,
        })}
      >
        <Card>
          <div className="flex flex-row justify-between">
            <h4 className="text-xl font-bold">This Week</h4>
            <Badge>This Week</Badge>
          </div>
          <TodosCompletedChart todos={todos} />
        </Card>
        <div className="grid grid-cols-2 gap-4">
          <TodoStats
            label="Total Tasks"
            total={todos.length ?? 0}
            onClick={() =>
              navigate(appRoutes.listTodos.path, { state: { completed: null } })
            }
          />
          <TodoStats
            label="Not Complete"
            total={todos.filter((todo) => !todo?.completed).length ?? 0}
            onClick={() =>
              navigate(appRoutes.listTodos.path, {
                state: { completed: false },
              })
            }
          />
          <TodoStats
            label="Complete"
            total={todos.filter((t) => t?.completed).length}
            onClick={() =>
              navigate(appRoutes.listTodos.path, { state: { completed: true } })
            }
          />
        </div>
      </div>
    </>
  );
};
