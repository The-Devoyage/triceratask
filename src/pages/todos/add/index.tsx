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
import { appRoutes } from "src/routes";
import { useToaster } from "src/utils/useToaster";
import { userUuidVar } from "src/state";
import { IoIosSave } from "react-icons/io";

export const Add = () => {
  const { register, handleSubmit } = useForm<Create_Todo_Input>();
  const navigate = useNavigate();
  const [createTodo, { loading }] = useCreateTodoMutation();
  const toaster = useToaster();

  const onSubmit = (values: Create_Todo_Input) => {
    createTodo({
      variables: {
        create_todo_input: {
          title: values.title,
          description: values.description,
          completed: values.completed ?? false,
          created_by: userUuidVar() ?? "",
          updated_by: userUuidVar() ?? "",
        },
      },
      onCompleted: () => {
        navigate(appRoutes.listTodos.path);
        toaster.addToast("success", "Todo created successfully!");
      },
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Label>Title</Label>
          <TextInput placeholder="Title" {...register("title")} />
          <Label>Todo</Label>
          <Textarea placeholder="Description" {...register("description")} />
        </div>
        <div className="flex justify-between items-end">
          <Button type="submit" isProcessing={loading}>
            <IoIosSave className="h-5 md:mr-2" />
            <span className="hidden md:block">Add Todo</span>
          </Button>
          <div className="flex flex-col">
            <Label>Goal Date</Label>
            <input
              type="date"
              {...register("goal_date")}
              className="rounded-md dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 p-2 dark:[color-scheme:dark]"
            />
          </div>
        </div>
      </form>
    </Card>
  );
};
