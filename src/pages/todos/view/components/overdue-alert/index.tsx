import { Alert } from "flowbite-react";
import { FC } from "react";
import dayjs from "src/utils/dayjs";
import { ViewGetTodoQuery } from "../../context/graphql.generated";

export const OverdueAlert: FC<{
  todo: ViewGetTodoQuery["get_todo"];
  visible: boolean;
}> = ({ todo, visible }) =>
  visible && (
    <Alert color="failure" className="mb-4">
      <h3 className="text-lg font-bold">
        Overdue: {dayjs.tz(todo?.goal_date).local().format("MMM DD, YYYY")}
      </h3>
      <p>
        This todo is overdue. Try updating the goal date or mark it as
        completed.
      </p>
    </Alert>
  );
