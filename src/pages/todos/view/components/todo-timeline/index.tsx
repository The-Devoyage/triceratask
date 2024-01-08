import { useState } from "react";
import dayjs from "src/utils/dayjs";
import { ListGroup, Timeline } from "flowbite-react";
import { FC } from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { UserAvatar } from "src/components";
import {
  CreatedTimelineItem,
  EncryptedNewValue,
  ShowMoreTimelineItem,
} from "./components";
import { ViewGetTodoQuery } from "../../context/graphql.generated";

export const TodoTimeline: FC<{
  todo: ViewGetTodoQuery["get_todo"]["data"];
}> = ({ todo }) => {
  const [historyCount, setHistoryCount] = useState(5);
  const histories = todo?.history?.data.reduce((acc, history) => {
    return {
      ...acc,
      [dayjs.tz(history?.created_at).toISOString()]: [
        ...(acc[dayjs.tz(history?.created_at).toISOString()] || []),
        history,
      ],
    };
  }, {} as Record<string, ViewGetTodoQuery["get_todo"]["data"]["history"]["data"][0][]>);

  return (
    <Timeline>
      {Object.entries(histories || {})
        .sort(([a], [b]) => dayjs(b).diff(dayjs(a)))
        .slice(0, historyCount)
        .map(([date, histories]) => (
          <Timeline.Item>
            <Timeline.Point icon={MdBookmarkAdded} />
            <Timeline.Content>
              <Timeline.Time className="flex justify-between">
                {dayjs().to(date)}
                <div className="flex overflow-hidden justify-end p-1">
                  <UserAvatar
                    user={histories[0]?.created_by.data}
                    size="sm"
                    button
                    tooltip={{
                      placement: "left",
                    }}
                  />
                </div>
              </Timeline.Time>
              <Timeline.Body className="mt-4">
                <ListGroup>
                  {histories.map(
                    (history) =>
                      history?.new_value && (
                        <ListGroup.Item className="flex">
                          <div className="text-left">
                            <span className="font-bold capitalize col-span-3">
                              {history.property.replace("_", " ")}
                            </span>
                            <EncryptedNewValue
                              history={history}
                              attemptDecrypt={
                                history.property === "description"
                              }
                            />
                          </div>
                        </ListGroup.Item>
                      )
                  )}
                </ListGroup>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      <ShowMoreTimelineItem
        onClick={() => setHistoryCount(historyCount + 5)}
        visible={historyCount < Object.entries(histories || {}).length}
      />
      <CreatedTimelineItem todo={todo} />
    </Timeline>
  );
};
