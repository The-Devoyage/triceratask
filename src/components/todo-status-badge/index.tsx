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

    if (goalDate) {
      return dayjs.tz(goalDate).local().fromNow();
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

    if (goalDate) {
      if (dayjs.tz(goalDate).local().isBefore(dayjs.tz().add(3, "day"))) {
        return "warning";
      }
      return "purple";
    }
    return "indigo";
  };

  return (
    <Tooltip
      theme={{
        target: "h-full",
      }}
      content={
        todo?.completed && todo?.completed_at
          ? dayjs.tz(todo?.completed_at).local().format("MMMM D, YYYY h:mm A")
          : goalDate
          ? `Goal: ${dayjs.tz(goalDate).local().format("MMMM D, YYYY h:mm A")}`
          : "No goal set"
      }
    >
      <Badge
        color={getColor()}
        icon={todo?.completed ? HiBadgeCheck : TbProgressBolt}
        size="sm"
        className="rounded-md gap-0 md:gap-1 flex justify-center align-center text-xs"
        theme={{
          icon: {
            size: {
              sm: "h-6 w-6",
            },
          },
        }}
      >
        <span className="ml-1">{getStatus()}</span>
      </Badge>
    </Tooltip>
  );
};
