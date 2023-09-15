import { Badge, Tooltip } from "flowbite-react";
import { FC } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { TbProgressBolt } from "react-icons/tb";
import { Todo } from "src/types/generated";
import dayjs from "src/utils/dayjs";

interface Props {
  todo?: Pick<Todo, "completed" | "completed_at">;
}

export const TodoStatusBadge: FC<Props> = ({ todo }) => {
  return (
    <Tooltip
      content={
        todo?.completed
          ? dayjs
              .tz(todo?.completed_at ?? "")
              .local()
              .format("MMMM D, YYYY h:mm A")
          : "No due date set."
      }
    >
      <Badge
        color={todo?.completed ? "success" : "indigo"}
        icon={todo?.completed ? HiBadgeCheck : TbProgressBolt}
        size="sm"
        className="px-2 rounded-md"
        theme={{
          icon: {
            size: {
              sm: "h-6 w-6",
            },
          },
        }}
      >
        {todo?.completed ? "Completed" : "Pending"}
      </Badge>
    </Tooltip>
  );
};
