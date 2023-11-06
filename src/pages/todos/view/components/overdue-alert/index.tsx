import { Alert } from "flowbite-react";
import { FC } from "react";
import dayjs from "src/utils/dayjs";
import { GetTodoWithHistoryQuery } from "../../graphql.generated";

export const OverdueAlert: FC<{
  todo: GetTodoWithHistoryQuery["get_todo"];
  visible: boolean;
}> = ({ todo, visible }) =>
  visible && (
    <Alert color="failure" className="mb-4">
      <h3 className="text-lg font-bold">
        Overdue: {dayjs.tz(todo?.goal_date).local().format("MMM DD, YYYY")}
      </h3>
      <p>
        This todo is overdue. You should probably get started on it right away.
      </p>
    </Alert>
  );
