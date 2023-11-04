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
import { useNavigate, useParams } from "react-router-dom";
import { Update_Todos_Input } from "src/types/generated";
import { appRoutes } from "src/routes";
import { userUuidVar } from "src/state";
import { IoIosSave } from "react-icons/io";
import { useGetTodoQuery, useUpdateTodosMutation } from "./graphql.generated";
import dayjs from "src/utils/dayjs";

export const Edit = () => {
  const { uuid } = useParams<{ uuid: string }>();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<
    Update_Todos_Input["values"]
  >();
  const [updateTodo] = useUpdateTodosMutation();
  const { data } = useGetTodoQuery({
    variables: {
      get_todo_input: { query: { uuid, created_by: userUuidVar() } },
    },
  });

  useEffect(() => {
    reset({
      title: data?.get_todo?.title,
      description: data?.get_todo?.description,
      completed: data?.get_todo?.completed,
      goal_date: dayjs
        .utc(data?.get_todo?.goal_date)
        .local()
        .format("YYYY-MM-DDTHH:mm"),
    });
  }, [data, reset]);

  const onSubmit = (values: Update_Todos_Input["values"]) => {
    updateTodo({
      variables: {
        update_todos_input: {
          query: { uuid, created_by: userUuidVar() },
          values,
        },
      },
      onCompleted: () =>
        navigate(appRoutes.viewTodo.path.replace(":uuid", uuid!)),
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <Label>Title</Label>
          <TextInput
            placeholder="Title"
            className="mb-4"
            {...register("title", {
              required: true,
            })}
          />
          <Label>Description</Label>
          <Textarea placeholder="Description" {...register("description")} />
        </div>
        <div className="flex justify-between items-end">
          <Button type="submit" className="flex justify-center items-center">
            <IoIosSave className="h-5 md:mr-2" />
            <span className="hidden md:block">Update Todo</span>
          </Button>
          <div className="flex flex-col">
            <Label>Goal Date</Label>
            <input
              type="datetime-local"
              {...register("goal_date", {
                valueAsDate: true,
              })}
              className="rounded-md dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 p-2 dark:[color-scheme:dark]"
            />
          </div>
        </div>
      </form>
    </Card>
  );
};
