import { useEffect } from "react";
import {
  Button,
  Label,
  TextInput,
  Textarea,
  Card,
  Checkbox,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { useGetTodoQuery, useUpdateTodosMutation } from "./edit.generated";
import { useNavigate, useParams } from "react-router-dom";
import { Update_Todos_Input } from "src/types/generated";

export const Edit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<Update_Todos_Input>();
  const [updateTodo] = useUpdateTodosMutation({
    onCompleted: () => {
      navigate("/list");
    },
    refetchQueries: ["GetTodos"],
    awaitRefetchQueries: true,
  });
  const { data } = useGetTodoQuery({
    variables: { get_todo_input: { id: parseInt(id!) } },
  });

  useEffect(() => {
    reset({
      title: data?.get_todo?.title,
      description: data?.get_todo?.description,
      completed: data?.get_todo?.completed,
    });
  }, [data, reset]);

  const onValid = (values: Update_Todos_Input) => {
    updateTodo({
      variables: {
        update_todos_input: {
          query: { id: parseInt(id!) },
          title: values.title,
          description: values.description,
          completed: values.completed,
        },
      },
    });
  };

  return (
    <Card>
      <div className="flex justify-between align-center">
        <h4 className="text-xl font-bold">Manage your todo</h4>
        <div>
          <Label className="mr-2">Completed</Label>
          <Checkbox {...register("completed")} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="mb-4">
          <Label>Title</Label>
          <TextInput
            placeholder="Title"
            {...register("title", {
              required: true,
            })}
          />
          <Label>Description</Label>
          <Textarea placeholder="Description" {...register("description")} />
        </div>
        <Button type="submit">Update Todo</Button>
      </form>
    </Card>
  );
};
