import { Badge, Card } from "flowbite-react";
import { GoalMetChart, TodoStats, TodosCompletedChart } from "./components";
import { createSearchParams, useNavigate } from "react-router-dom";
import { appRoutes } from "src/routes";
import { userUuidVar } from "src/state";
import { useDashboardGetTodoCountQuery } from "./graphql.generated";
import clsx from "clsx";

export const Dashboard = () => {
  const navigate = useNavigate();
  const {
    data: completed,
    loading: loadingCompleted,
  } = useDashboardGetTodoCountQuery({
    variables: {
      get_todos_input: {
        query: {
          completed: true,
          access: {
            revoked: false,
            user: { uuid: userUuidVar() },
          },
        },
        opts: {
          per_page: -1,
          page: 1,
        },
      },
    },
  });
  const { data: total, loading: loadingTotal } = useDashboardGetTodoCountQuery({
    variables: {
      get_todos_input: {
        query: {
          access: {
            revoked: false,
            user: { uuid: userUuidVar() },
          },
        },
        opts: {
          per_page: -1,
          page: 1,
        },
      },
    },
  });
  const {
    data: incomplete,
    loading: loadingIncomplete,
  } = useDashboardGetTodoCountQuery({
    variables: {
      get_todos_input: {
        query: {
          completed: false,
          access: {
            revoked: false,
            user: { uuid: userUuidVar() },
          },
        },
        opts: {
          per_page: -1,
          page: 1,
        },
      },
    },
  });

  return (
    <>
      <div className={clsx("grid gap-4 sm:grid-cols-1 md:grid-cols-2")}>
        <Card>
          <div className="flex flex-row justify-between">
            <h4 className="text-2xl font-bold">Overview</h4>
            <Badge>This Week</Badge>
          </div>
          <TodosCompletedChart />
        </Card>
        <div className="grid grid-cols-2 gap-4">
          <TodoStats
            label="Total Tasks"
            total={total?.get_todos.meta?.total_count ?? 0}
            loading={loadingTotal}
            onClick={() => navigate(appRoutes.listTodos.path)}
          />
          <TodoStats
            label="Not Complete"
            total={incomplete?.get_todos.meta?.total_count ?? 0}
            loading={loadingIncomplete}
            onClick={() =>
              navigate({
                pathname: appRoutes.listTodos.path,
                search: createSearchParams({ completed: "false" }).toString(),
              })
            }
          />
          <TodoStats
            label="Complete"
            total={completed?.get_todos.meta?.total_count ?? 0}
            loading={loadingCompleted}
            onClick={() =>
              navigate({
                pathname: appRoutes.listTodos.path,
                search: createSearchParams({ completed: "true" }).toString(),
              })
            }
          />
        </div>
        <GoalMetChart />
      </div>
    </>
  );
};
