import { Button, Card } from "flowbite-react";
import { TodoTimeline } from "./components";
import { Empty, Loader, TodoStatusBadge } from "src/components";
import {
  useGetTodoQuery,
  useUpdateTodosMutation,
} from "../edit/edit.generated";
import { useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "src/routes";
import { BsFillCheckSquareFill } from "react-icons/bs";
import { AiFillEdit } from "react-icons/ai";
import { TbCheckbox } from "react-icons/tb";
import { userUuidVar } from "src/state";

export const View = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const [updateTodos, { loading: updating }] = useUpdateTodosMutation();
  const { data, loading } = useGetTodoQuery({
    variables: {
      get_todo_input: {
        uuid,
        created_by: userUuidVar(),
      },
    },
  });
  const todo = data?.get_todo;
  const navigate = useNavigate();

  const handleUpdate = () => {
    updateTodos({
      variables: {
        update_todos_input: {
          query: {
            uuid,
          },
          completed: true,
        },
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
            <h1 className="text-3xl font-bold">{todo?.title}</h1>
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
      <Card className="col-span-12 md:col-span-4">
        <TodoTimeline />
      </Card>
    </div>
  );
};
