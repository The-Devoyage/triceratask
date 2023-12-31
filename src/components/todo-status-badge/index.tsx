import { Badge, Tooltip } from "flowbite-react";
import { FC } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { TbProgressBolt } from "react-icons/tb";
import { Todo } from "src/types/generated";
import dayjs from "src/utils/dayjs";

interface Props {
  todo?: Pick<Todo, "completed" | "completed_at" | "goal_date"> | null;
}

export const TodoStatusBadge: FC<Props> = ({ todo }) => {
  const goalDate = todo?.goal_date;

  const getStatus = () => {
    if (todo?.completed) {
      return "Completed";
    }

    if (goalDate && dayjs.tz(goalDate).local().isBefore(dayjs.tz())) {
      return "Overdue";
    }

    return "Pending";
  };

  const getColor = () => {
    if (todo?.completed) {
      return "success";
    }

    if (goalDate && dayjs.tz(goalDate).local().isBefore(dayjs.tz())) {
      return "failure";
    }

    return "indigo";
  };

  return (
    <Tooltip
      content={
        todo?.completed && todo?.completed_at
          ? dayjs.tz(todo?.completed_at).local().format("MMMM D, YYYY h:mm A")
          : goalDate
          ? `Due ${dayjs.tz(goalDate).local().fromNow()}`
          : "No due date"
      }
    >
      <Badge
        color={getColor()}
        icon={todo?.completed ? HiBadgeCheck : TbProgressBolt}
        size="sm"
        className="px-2 rounded-md gap-0 md:gap-1"
        theme={{
          icon: {
            size: {
              sm: "h-6 w-6",
            },
          },
        }}
      >
        <span className="hidden md:inline">{getStatus()}</span>
      </Badge>
    </Tooltip>
  );
};
