import { Alert, Avatar, Button, Card } from "flowbite-react";
import { GoalDateAlert, OverdueAlert, TodoTimeline } from "./components";
import { Empty, Loader, TodoStatusBadge, UserAvatar } from "src/components";
import { useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "src/routes";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { TbCheckbox } from "react-icons/tb";
import { userUuidVar } from "src/state";
import { LuPartyPopper } from "react-icons/lu";
import { useUpdateTodosMutation } from "../edit/graphql.generated";
import dayjs from "src/utils/dayjs";
import { useViewGetTodoQuery } from "./graphql.generated";

export const View = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [updateTodos, { loading: updating }] = useUpdateTodosMutation();
  const { data, loading, refetch } = useViewGetTodoQuery({
    variables: {
      get_todo_input: {
        query: {
          uuid,
          access: {
            user: { uuid: userUuidVar() },
            revoked: false,
          },
        },
      },
      get_todo_historys_input: {
        query: {},
      },
      get_todo_accesss_input: {
        query: {},
      },
    },
    fetchPolicy: "cache-and-network",
  });
  const todo = data?.get_todo;
  const navigate = useNavigate();
  const userAccess = todo?.access.find((a) => a?.user?.uuid === userUuidVar());

  const handleUpdate = () => {
    updateTodos({
      variables: {
        update_todos_input: {
          query: {
            uuid,
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
          <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between">
            <Avatar.Group>
              {todo?.access.map((a) => (
                <UserAvatar key={a?.uuid} user={a?.user} showStatus button />
              ))}
            </Avatar.Group>
            <Button.Group>
              <Button
                color="indigo"
                disabled={!userAccess?.edit}
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
                disabled={
                  todo?.completed || (!userAccess?.edit && !userAccess?.manage)
                }
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
        <OverdueAlert
          todo={todo}
          visible={
            (todo?.goal_date &&
              !todo?.completed &&
              dayjs().isAfter(dayjs.tz(todo?.goal_date))) ||
            false
          }
        />
        <GoalDateAlert
          todo={todo}
          visible={
            !!todo?.goal_date && dayjs().isBefore(dayjs.tz(todo?.goal_date))
          }
        />
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
