import { Card, ListGroup, Tooltip } from "flowbite-react";
import { FaInfoCircle } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { Empty, Loader } from "src/components";
import { useUpcomingTasksByGoalQuery } from "./graphql.generated";
import dayjs from "src/utils/dayjs";
import { userUuidVar } from "src/state";
import { appRoutes } from "src/routes";
import { useNavigate } from "react-router-dom";
import { HiBadgeCheck } from "react-icons/hi";
import { TbProgressBolt } from "react-icons/tb";
import { Sort_Direction } from "src/types/generated";

const now = dayjs().toISOString();

export const UpcomingGoals = () => {
  const navigate = useNavigate();
  const { data, loading } = useUpcomingTasksByGoalQuery({
    pollInterval: 1000 * 60 * 2,
    fetchPolicy: "cache-and-network",
    variables: {
      get_todos_input: {
        opts: {
          per_page: 10,
          sort: [
            {
              field: "goal_date",
              direction: Sort_Direction.Asc,
            },
          ],
        },
        query: {
          GT: {
            goal_date: now,
          },
          completed: false,
          access: {
            user: {
              uuid: userUuidVar(),
            },
            revoked: false,
          },
        },
      },
    },
  });
  const todos = data?.get_todos.data.filter((t) => t.deleted_at === null);

  if (loading) {
    return (
      <Card className="h-full">
        <Loader
          message="Loading your goals."
          icon={<GoGoal className="h-20 w-20 animate-pulse text-indigo-400" />}
        />
      </Card>
    );
  }

  return (
    <Card>
      <div className="flex justify-between">
        <h3 className="text-2xl font-bold">Upcoming Goals</h3>
        <Tooltip
          content={`You have ${data?.get_todos.meta?.total_count} goals set.`}
        >
          <FaInfoCircle />
        </Tooltip>
      </div>
      <div className="h-full">
        {todos?.length ? (
          <ListGroup>
            {todos
              ?.filter((t) => !!t.goal_date)
              .map((todo) => (
                <ListGroup.Item
                  icon={todo?.completed ? HiBadgeCheck : TbProgressBolt}
                  theme={{
                    link: {
                      icon: "h-6 w-6 mr-3",
                    },
                  }}
                  onClick={() =>
                    navigate(
                      appRoutes.viewTodo.path.replace(":uuid", todo.uuid)
                    )
                  }
                >
                  <div className="flex justify-between items-center w-full">
                    <h3 className="font-bold text-left truncate mr-3">
                      {todo.title}
                    </h3>
                    <h4 className="text-sm text-gray-500 text-right">
                      {dayjs
                        .tz(todo.goal_date!)
                        .local()
                        .format("MMM DD, YYYY h:mm A")}
                    </h4>
                  </div>
                </ListGroup.Item>
              ))}
          </ListGroup>
        ) : (
          <div className="flex justify-center h-full">
            <Empty
              title="No Goals Set"
              description="Try setting a goal date when creating a task."
            />
          </div>
        )}
      </div>
      <p className="text-lg text-center">Goals yet to be met.</p>
    </Card>
  );
};
