import {
  Button,
  Label,
  TextInput,
  Textarea,
  Card,
  Checkbox,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { useCreateTodoMutation } from "./add.generated";
import { useNavigate } from "react-router-dom";
import { Create_Todo_Input } from "src/types/generated";

export const Add = () => {
  const { register, handleSubmit } = useForm<Create_Todo_Input>();
  const navigate = useNavigate();
  const [createTodo] = useCreateTodoMutation();

  const onValid = (values: Create_Todo_Input) => {
    createTodo({
      variables: {
        create_todo_input: {
          title: values.title,
          description: values.description,
          completed: values.completed ?? false,
        },
      },
      onCompleted: () => {
        navigate("/list");
      },
      awaitRefetchQueries: true,
      refetchQueries: ["GetTodos"],
    });
  };

  return (
    <Card>
      <div className="flex justify-between align-center">
        <h4 className="text-xl font-bold">Create a todo</h4>
        <div>
          <Label className="mr-2">Completed</Label>
          <Checkbox {...register("completed")} />
        </div>
      </div>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="my-2">
          <Label>Title</Label>
          <TextInput placeholder="Title" {...register("title")} />
          <Label>Todo</Label>
          <Textarea placeholder="Description" {...register("description")} />
        </div>
        <Button type="submit">Add Todo</Button>
      </form>
    </Card>
  );
};
