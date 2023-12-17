import { useState, useEffect } from "react";
import { Button, Label, TextInput, Card, Checkbox } from "flowbite-react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Todo, Update_Todos_Input } from "src/types/generated";
import { appRoutes } from "src/routes";
import { userUuidVar } from "src/state";
import { FaSquareCheck } from "react-icons/fa6";
import {
  useEditGetTodoQuery,
  useUpdateTodosMutation,
} from "./graphql.generated";
import dayjs from "src/utils/dayjs";
import { TaskAccess } from "./components";
import { Loader } from "src/components";
import { EncryptedTextarea } from "src/components/encrypted-textarea";
import Crypto from "crypto-js";
import { useToaster } from "src/utils/useToaster";

export const Edit = () => {
  const [isDecrypted, setIsDecrypted] = useState(true);
  const { uuid } = useParams<{ uuid: string }>();
  const navigate = useNavigate();
  const { register, handleSubmit, reset, setValue, watch } = useForm<
    Update_Todos_Input["values"] & { password: string }
  >();
  const [updateTodo] = useUpdateTodosMutation();
  const password = watch("password");
  const toaster = useToaster();
  const { data, loading } = useEditGetTodoQuery({
    variables: {
      get_todo_accesss_input: { query: {} },
      get_todo_input: {
        query: {
          uuid,
          access: {
            user: {
              uuid: userUuidVar(),
            },
            revoked: false,
          },
        },
      },
    },
  });

  useEffect(() => {
    if (data?.get_todo?.is_encrypted) {
      setIsDecrypted(false);
    }
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

  useEffect(() => {
    if (password && data?.get_todo?.is_encrypted) {
      const value = Crypto.AES.decrypt(
        data?.get_todo?.description ?? "",
        password
      );

      try {
        const decrypted = value.toString(Crypto.enc.Utf8);
        const todo: Pick<Todo, "description"> = JSON.parse(decrypted);
        setIsDecrypted(true);
        setValue("description", todo.description);
      } catch (err) {
        console.error(err);
        setIsDecrypted(false);
        return;
      }
    } else if (!password && !data?.get_todo?.is_encrypted) {
      setValue("description", data?.get_todo?.description);
    }
  }, [password, data, setValue]);

  const onSubmit = (
    values: Update_Todos_Input["values"] & { password: string }
  ) => {
    const { password, ...rest } = values;

    if (data?.get_todo?.is_encrypted && password) {
      const encrypted = Crypto.AES.encrypt(
        JSON.stringify({ description: rest.description }),
        password
      ).toString();
      rest.description = encrypted;
    }

    if (data?.get_todo?.is_encrypted && !isDecrypted && password) {
      toaster.addToast("error", "Please use the correct password.");
      return;
    }

    updateTodo({
      variables: {
        update_todos_input: {
          query: { uuid },
          values: rest,
        },
      },
      onCompleted: () =>
        navigate(appRoutes.viewTodo.path.replace(":uuid", uuid!)),
    });
  };

  if (loading) {
    return (
      <Card>
        <Loader />
      </Card>
    );
  }

  return (
    <>
      <Card className="mb-3">
        <div className="flex justify-between align-center">
          <h4 className="text-3xl font-bold">Manage Task</h4>
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
            <EncryptedTextarea
              label=""
              requirePassword={data?.get_todo?.is_encrypted ?? false}
              disablePassword
              placeholder="Encrypted Description"
              onChange={(v) => setValue("description", v)}
              value={
                !isDecrypted
                  ? "Encrypted description. Enter password to decrypt."
                  : watch("description") ?? ""
              }
              disabled={!isDecrypted}
              isDecrypted={isDecrypted}
              passwordInputProps={{
                ...register("password"),
                readOnly: isDecrypted,
                value: password,
              }}
            />
          </div>
          <div className="flex justify-between items-end">
            <Button type="submit" className="flex justify-center items-center">
              <FaSquareCheck className="h-5 md:mr-2" />
              <span className="hidden md:block">Update Task</span>
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
      <TaskAccess
        access={data?.get_todo?.access}
        todo_uuid={data?.get_todo?.uuid}
      />
    </>
  );
};
