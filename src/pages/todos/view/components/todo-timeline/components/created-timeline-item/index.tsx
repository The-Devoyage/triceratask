import { FC } from "react";
import dayjs from "dayjs";
import { ListGroup, Timeline } from "flowbite-react";
import { UserAvatar } from "src/components";
import { MdBookmarkAdded } from "react-icons/md";
import { ViewGetTodoQuery } from "src/pages/todos/view/context/graphql.generated";

export const CreatedTimelineItem: FC<{
  todo: ViewGetTodoQuery["get_todo"];
}> = ({ todo }) => {
  return (
    <Timeline.Item>
      <Timeline.Point icon={MdBookmarkAdded} />
      <Timeline.Content>
        <Timeline.Time className="flex justify-between">
          {dayjs.tz(todo?.created_at).from(dayjs())}
          <div className="flex overflow-hidden justify-end p-1">
            <UserAvatar
              user={todo?.created_by}
              size="sm"
              showStatus
              button
              tooltip={{
                placement: "left",
              }}
            />
          </div>
        </Timeline.Time>
        <Timeline.Body className="mt-4">
          <ListGroup>
            <ListGroup.Item className="flex">
              <span className="font-bold capitalize">Created</span>
              <span className="ml-2 align-right">
                {dayjs.tz(todo?.created_at).format("MMM DD, YYYY")}
              </span>
            </ListGroup.Item>
          </ListGroup>
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
  );
};
