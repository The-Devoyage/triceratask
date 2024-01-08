import { Alert } from "flowbite-react";
import { FC } from "react";
import dayjs from "src/utils/dayjs";
import { ViewGetTodoQuery } from "../../context/graphql.generated";
import { HiOutlineClock } from "react-icons/hi";

export const GoalDateAlert: FC<{
  todo: ViewGetTodoQuery["get_todo"]["data"];
  visible: boolean;
}> = ({ todo, visible }) =>
  visible && (
    <Alert color="info" className="mb-4" icon={HiOutlineClock}>
      <h3 className="text-lg font-bold">
        Goal: {dayjs.tz(todo?.goal_date).local().format("MMM DD, YYYY h:mm A")}
      </h3>
      <p>This goal is due {dayjs.tz(todo?.goal_date).fromNow()}.</p>
    </Alert>
  );
