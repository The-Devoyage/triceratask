import { Alert, Button, Card } from "flowbite-react";
import { TodoTimeline } from "./components";
import { Empty, Loader, TodoStatusBadge } from "src/components";
import { useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "src/routes";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { TbCheckbox } from "react-icons/tb";
import { userUuidVar } from "src/state";
import { useGetTodoWithHistoryQuery } from "./graphql.generated";
import { LuPartyPopper } from "react-icons/lu";
import { useUpdateTodosMutation } from "../edit/graphql.generated";
import dayjs from "src/utils/dayjs";

export const View = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [updateTodos, { loading: updating }] = useUpdateTodosMutation();
  const { data, loading, refetch, called } = useGetTodoWithHistoryQuery({
    variables: {
      get_todo_input: {
        query: {
          uuid,
          created_by: userUuidVar(),
        },
      },
      get_todo_historys_input: {
        query: {
          todo_uuid: uuid,
          created_by: userUuidVar(),
        },
      },
    },
    fetchPolicy: "cache-and-network",
  });
  const todo = data?.get_todo;
  const navigate = useNavigate();

  const handleUpdate = () => {
    updateTodos({
      variables: {
        update_todos_input: {
          query: {
            uuid,
            created_by: userUuidVar(),
          },
          values: {
            completed: true,
          },
        },
      },
      onCompleted: () => {
        refetch();
      },
    });
  };

  if (loading)
    return (
      <Card>
        <Loader message="Loading this level of success takes a second..." />
      </Card>
    );

  if (!todo)
    return (
      <Card>
        <Empty description="This todo was not found." />
        <div className="flex justify-center mt-4">
          <Button
            className="mx-1"
            onClick={() => navigate(appRoutes.listTodos.path)}
          >
            Back to Todos
          </Button>
          <Button
            className="mx-1"
            color="success"
            onClick={() => navigate(appRoutes.createTodo.path)}
          >
            Create Todo
          </Button>
        </div>
      </Card>
    );

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-8">
        <Card>
          <div className="flex justify-between items-start">
            <h1 className="text-3xl font-bold mr-4">{todo?.title}</h1>
            <TodoStatusBadge todo={todo} />
          </div>
          <p>{todo?.description}</p>
          <div className="border-t border-gray-200 mt-4 pt-4 flex justify-end">
            <Button.Group>
              <Button
                color="indigo"
                onClick={() =>
                  navigate(appRoutes.editTodo.path.replace(":uuid", uuid!))
                }
              >
                <AiFillEdit className="h-6" />
              </Button>
              <Button
                color={todo?.completed ? "info" : "success"}
                onClick={handleUpdate}
                isProcessing={updating}
                disabled={todo?.completed}
                className="border-l"
              >
                {todo?.completed ? (
                  <BsFillCheckSquareFill className="h-6" />
                ) : (
                  <TbCheckbox className="h-6" />
                )}
              </Button>
            </Button.Group>
          </div>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-4">
        {todo?.goal_date &&
          !todo?.completed &&
          (dayjs().isBefore(dayjs.tz(todo?.goal_date)) ? (
            <Alert color="failure" className="mb-4">
              <h3 className="text-lg font-bold">
                Overdue: {dayjs.tz(todo?.goal_date).format("MMM DD, YYYY")}
              </h3>
              <p>
                This todo is overdue. You should probably get started on it
                right away.
              </p>
            </Alert>
          ) : (
            <Alert color="warning" className="mb-4">
              <h3 className="text-lg font-bold">
                Due: {dayjs.tz(todo?.goal_date).format("MMM DD, YYYY")}
              </h3>
              <p>
                This todo is due on{" "}
                {dayjs.tz(todo?.goal_date).format("MMM DD, YYYY")}. You have{" "}
                {dayjs.tz(todo?.goal_date).fromNow()} to complete it.
              </p>
            </Alert>
          ))}
        <Card className="p-2">
          <TodoTimeline todo={todo} />
          <Alert color="info" icon={LuPartyPopper}>
            Hooray, you are off to a great start!
          </Alert>
        </Card>
      </div>
    </div>
  );
};
