import { Alert } from "flowbite-react";
import { FC } from "react";
import { GetTodoWithHistoryQuery } from "../../graphql.generated";
import dayjs from "src/utils/dayjs";

export const GoalDateAlert: FC<{
  todo: GetTodoWithHistoryQuery["get_todo"];
  visible: boolean;
}> = ({ todo, visible }) =>
  visible && (
    <Alert color="info" className="mb-4">
      <h3 className="text-lg font-bold">
        Due: {dayjs.tz(todo?.goal_date).format("MMM DD, YYYY h:mm A")}
      </h3>
      <p>You have {dayjs.tz(todo?.goal_date).fromNow()} to complete it.</p>
    </Alert>
  );
