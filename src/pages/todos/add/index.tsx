import { useState } from "react";
import {
  Button,
  Label,
  TextInput,
  Card,
  Checkbox,
  Tooltip,
  Badge,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { useCreateTodoMutation } from "./add.generated";
import { useNavigate } from "react-router-dom";
import { Create_Todo_Input } from "src/types/generated";
import { appRoutes } from "src/routes";
import { useToaster } from "src/utils/useToaster";
import { FaSquareCheck } from "react-icons/fa6";
import { EncryptedTextarea } from "src/components/encrypted-textarea";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";
import Crypto from "crypto-js";
import { useReactiveVar } from "@apollo/client";
import { darkModeVar } from "src/state";
import clsx from "clsx";

export const Add = () => {
  const [showPassword, setShowPassword] = useState(false);
  const darkMode = useReactiveVar(darkModeVar);
  const { register, handleSubmit, setValue } = useForm<
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
    if (showPassword) {
      if (!password) {
        toaster.addToast(
          "error",
          "Password is required when encrypting enabled."
        );
        return;
      }
      const encrypted = Crypto.AES.encrypt(
        JSON.stringify(values.description),
        password
      );
      rest.description = encrypted.toString();
    }
    createTodo({
      variables: {
        create_todo_input: {
          values: {
            ...rest,
            completed: values.completed ?? false,
            is_encrypted: showPassword,
          },
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
          <div className="flex justify-between items-end mb-1">
            <Label>Task</Label>
            <Tooltip
              content="Encrypt your task description with a password."
              placement="left"
            >
              <Button
                color={darkMode ? "dark" : "light"}
                size="sm"
                className={clsx({
                  "bg-red-200 dark:bg-red-800": showPassword,
                })}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <HiLockClosed /> : <HiLockOpen />}
              </Button>
            </Tooltip>
          </div>
          <EncryptedTextarea
            showPassword={showPassword}
            placeholder="Description"
            onChange={(e) => setValue("description", e.target.value)}
            inputProps={{
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
            {showPassword && (
              <Badge color="failure" className="ml-2">
                Encrypting
              </Badge>
            )}
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
