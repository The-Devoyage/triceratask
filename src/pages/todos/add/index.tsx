import { useState } from "react";
import {
  Button,
  Label,
  TextInput,
  Card,
  Checkbox,
  Badge,
  Tooltip,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { useCreateTodoMutation } from "./add.generated";
import { useNavigate } from "react-router-dom";
import { Create_Todo_Input } from "src/types/generated";
import { appRoutes } from "src/routes";
import { useToaster } from "src/utils/useToaster";
import { FaCircleInfo, FaSquareCheck } from "react-icons/fa6";
import { EncryptedTextarea } from "src/components/encrypted-textarea";
import Crypto from "crypto-js";

export const Add = () => {
  const [isEncrypting, setIsEncrypting] = useState(false);
  const { register, handleSubmit, setValue, watch } = useForm<
    Create_Todo_Input["values"] & { password: string }
  >({
    defaultValues: {
      goal_date: null,
    },
  });
  const navigate = useNavigate();
  const [createTodo, { loading }] = useCreateTodoMutation();
  const toaster = useToaster();

  const onSubmit = (
    values: Create_Todo_Input["values"] & { password: string }
  ) => {
    const { password, ...rest } = values;
    if (isEncrypting) {
      if (!password) {
        toaster.addToast(
          "error",
          "Password is required when encrypting enabled."
        );
        return;
      }
      const encrypted = Crypto.AES.encrypt(
        JSON.stringify({ description: values.description }),
        password
      );
      rest.description = encrypted.toString();
    }
    createTodo({
      variables: {
        create_todo_input: {
          values: {
            ...rest,
            description: rest.description ?? "",
            completed: values.completed ?? false,
            is_encrypted: isEncrypting,
          },
        },
      },
      onCompleted: (res) => {
        navigate(
          appRoutes.viewTodo.path.replace(":uuid", res.create_todo.data.uuid)
        );
        toaster.addToast("success", "Todo created successfully!");
      },
    });
  };

  return (
    <Card>
      <div className="flex justify-between align-center">
        <h4 className="text-xl font-bold">Create a Task</h4>
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
            {...register("title")}
            className="mb-4"
          />
          <EncryptedTextarea
            setIsEncrypting={setIsEncrypting}
            value={watch("description")}
            label={
              isEncrypting ? (
                <Badge color="failure" className="mb-1">
                  Encrypting
                </Badge>
              ) : (
                <Tooltip
                  placement="right"
                  content={
                    <p className="w-60">
                      Describe the task you want to accomplish. You may encrypt
                      the description by clicking the lock icon. If you encrypt
                      the description, you will need to provide the password
                      when you want to view or edit the description. If you
                      forget the password, it will be unrecoverable.
                    </p>
                  }
                >
                  <FaCircleInfo className="text-gray-500 mb-2 ml-1" />
                </Tooltip>
              )
            }
            placeholder="Today, I will do what others won’t, so tomorrow I can accomplish what others can’t."
            onChange={(v) => setValue("description", v)}
            passwordInputProps={{
              ...register("password"),
            }}
          />
        </div>
        <div className="flex justify-between items-end">
          <div className="flex items-end">
            <Button type="submit" isProcessing={loading}>
              <FaSquareCheck className="h-5 md:mr-2" />
              <span className="hidden md:block">Add Task</span>
            </Button>
          </div>
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
