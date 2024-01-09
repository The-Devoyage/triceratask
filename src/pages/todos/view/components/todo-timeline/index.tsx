import { useState } from "react";
import dayjs from "src/utils/dayjs";
import { ListGroup, Timeline, Alert, Card } from "flowbite-react";
import { FC } from "react";
import { MdBookmarkAdded } from "react-icons/md";
import { Loader, UserAvatar } from "src/components";
import {
  CreatedTimelineItem,
  EncryptedNewValue,
  ShowMoreTimelineItem,
} from "./components";
import { ViewGetTodoQuery } from "../../context/graphql.generated";
import {
  TodoTimelineGetHistoriesQuery,
  useTodoTimelineGetHistoriesQuery,
} from "./graphql.generated";
import { Order_Enum } from "src/types/generated";
import { LuPartyPopper } from "react-icons/lu";

export const TodoTimeline: FC<{
  todo: ViewGetTodoQuery["get_todo"]["data"];
}> = ({ todo }) => {
  const [page, setPage] = useState(1);
  const {
    data,
    loading,
    fetchMore,
    variables,
  } = useTodoTimelineGetHistoriesQuery({
    variables: {
      get_todo_historys_input: {
        query: {
          todo: {
            uuid: todo.uuid,
          },
        },
        opts: {
          per_page: 5,
          page: 1,
          sort: "created_at",
          order: Order_Enum.Desc,
        },
      },
    },
  });

  const histories = data?.get_todo_historys?.data.reduce((acc, history) => {
    return {
      ...acc,
      [dayjs.tz(history?.created_at).toISOString()]: [
        ...(acc[dayjs.tz(history?.created_at).toISOString()] || []),
        history,
      ],
    };
  }, {} as Record<string, TodoTimelineGetHistoriesQuery["get_todo_historys"]["data"][0][]>);

  if (loading) {
    return (
      <Card>
        <Loader message="Hindsight is 20/20" />
      </Card>
    );
  }

  return (
    <Card className="p-2">
      <Timeline>
        {Object.entries(histories || {})
          .sort(([a], [b]) => dayjs(b).diff(dayjs(a)))
          .map(([date, histories], i) => (
            <Timeline.Item key={i}>
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
                      (history, i) =>
                        history?.new_value && (
                          <ListGroup.Item className="flex" key={i}>
                            <div className="text-left">
                              <span className="font-bold capitalize text-gray-400">
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
          onClick={() => {
            fetchMore({
              variables: {
                ...variables,
                get_todo_historys_input: {
                  ...variables!.get_todo_historys_input!,
                  query: {
                    ...variables!.get_todo_historys_input.query,
                  },
                  opts: {
                    ...variables!.get_todo_historys_input.opts,
                    page: page + 1,
                  },
                },
              },
            });
            setPage(page + 1);
          }}
          visible={data?.get_todo_historys?.meta?.total_pages !== page}
        />
        <CreatedTimelineItem todo={todo} />
      </Timeline>
      <Alert color="info" icon={LuPartyPopper}>
        Hooray! You are off to a great start!
      </Alert>
    </Card>
  );
};
