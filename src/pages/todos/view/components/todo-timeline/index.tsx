import { useState } from "react";
import dayjs from "src/utils/dayjs";
import { Button, ListGroup, Timeline } from "flowbite-react";
import { FC } from "react";
import { GetTodoWithHistoryQuery } from "../../graphql.generated";
import { MdBookmarkAdded } from "react-icons/md";

export const TodoTimeline: FC<{
  todo: GetTodoWithHistoryQuery["get_todo"];
}> = ({ todo }) => {
  const [historyCount, setHistoryCount] = useState(5);
  const histories = todo?.history?.reduce((acc, history) => {
    return {
      ...acc,
      [dayjs.tz(history.created_at).toISOString()]: [
        ...(acc[dayjs.tz(history.created_at).toISOString()] || []),
        history,
      ],
    };
  }, {} as Record<string, GetTodoWithHistoryQuery["get_todo"]["history"][0][]>);

  const handleNewValue = (value: string, truncate: boolean) => {
    if (value === "0") return "false";
    if (value === "1") return "true";

    if (truncate) {
      if (value.length > 100) {
        return `${value.slice(0, 100)}...`;
      }
    }
    return value;
  };

  return (
    <Timeline>
      {Object.entries(histories || {})
        .sort(([a], [b]) => dayjs(b).diff(dayjs(a)))
        .slice(0, historyCount)
        .map(([date, histories]) => (
          <Timeline.Item>
            <Timeline.Point icon={MdBookmarkAdded} />
            <Timeline.Content>
              <Timeline.Time>{dayjs().to(date)}</Timeline.Time>
              <Timeline.Body className="mt-4">
                <ListGroup>
                  {histories.map(
                    (history) =>
                      history.new_value && (
                        <ListGroup.Item className="flex">
                          <div className="text-left">
                            <span className="font-bold capitalize col-span-3">
                              {history.property.replace("_", " ")}
                            </span>
                            <span className="ml-2 align-right col-span-9">
                              {handleNewValue(history.new_value, true)}
                            </span>
                          </div>
                        </ListGroup.Item>
                      )
                  )}
                </ListGroup>
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      {historyCount < Object.entries(histories || {}).length && (
        <Timeline.Item>
          <Timeline.Point icon={MdBookmarkAdded} />
          <Timeline.Content>
            <Timeline.Content className="hover:mb-32 transition-all">
              <Button
                className="text-center w-full text-sm py-1"
                size="small"
                onClick={() => setHistoryCount(historyCount + 5)}
              >
                Show More
              </Button>
            </Timeline.Content>
          </Timeline.Content>
        </Timeline.Item>
      )}
      <Timeline.Item>
        <Timeline.Point icon={MdBookmarkAdded} />
        <Timeline.Content>
          <Timeline.Time>
            {dayjs.tz(todo?.created_at).from(dayjs())}
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
    </Timeline>
  );
};