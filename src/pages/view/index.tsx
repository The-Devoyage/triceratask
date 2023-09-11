import { Button, Card } from "flowbite-react";
import { TodoTimeline } from "./components";
import { Empty, Loader, TodoStatusBadge } from "src/components";
import {
  useGetTodoQuery,
  useUpdateTodosMutation,
} from "../edit/edit.generated";
import { useNavigate, useParams } from "react-router-dom";
import { appRoutes } from "src/routes";

export const View = () => {
  const { id } = useParams<{ id: string }>();
  const [updateTodos, { loading: updating }] = useUpdateTodosMutation();
  const { data, loading } = useGetTodoQuery({
    variables: {
      get_todo_input: {
        id: parseInt(id!),
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
            id: parseInt(id!),
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
      <div className="col-span-1 md:col-span-8">
        <Card>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">{todo?.title}</h1>
            <TodoStatusBadge todo={todo} />
          </div>
          <p>{todo?.description}</p>
          <div className="border-t border-gray-200 mt-4 pt-4 flex justify-start">
            <Button
              color="success"
              size="sm"
              onClick={handleUpdate}
              isProcessing={updating}
            >
              Complete
            </Button>
            <Button
              color="indigo"
              size="sm"
              className="ml-2"
              onClick={() =>
                navigate(appRoutes.editTodo.path.replace(":id", id!))
              }
            >
              Edit
            </Button>
          </div>
        </Card>
      </div>
      <Card className="col-span-1 md:col-span-4">
        <TodoTimeline />
      </Card>
    </div>
  );
};
