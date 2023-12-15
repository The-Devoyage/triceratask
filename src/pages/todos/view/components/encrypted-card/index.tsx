import { FC, useState, useEffect, useContext } from "react";
import { Card, TextInput, Tooltip } from "flowbite-react";
import { Todo } from "src/types/generated";
import Crypto from "crypto-js";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";
import clsx from "clsx";
import { FaCircleInfo, FaLock } from "react-icons/fa6";
import { ViewTodoContext } from "../../context";

export const EncryptedCard: FC<{
  todo: Pick<Todo, "description" | "is_encrypted">;
}> = ({ todo }) => {
  const { setIsDecrypted, password, setPassword } = useContext(ViewTodoContext);
  const [decrypedDescription, setDecryptedDescription] = useState<
    Todo["description"] | null
  >(null);
  const [debounce, setDebounce] = useState<NodeJS.Timeout | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const debouncePassword = (value: string) => {
    if (debounce) clearTimeout(debounce);
    setDebounce(
      setTimeout(() => {
        setPassword(value);
      }, 500)
    );
  };

  useEffect(() => {
    if (todo?.is_encrypted && password) {
      const value = Crypto.AES.decrypt(todo.description, password);
      try {
        const decrypted = value.toString(Crypto.enc.Utf8);
        if (decrypted) setSuccess(true);
        setIsDecrypted(true);
        setTimeout(() => {
          const todo: Pick<Todo, "description"> = JSON.parse(decrypted);
          setDecryptedDescription(todo.description);
        }, 2000);
      } catch (err) {
        setSuccess(false);
      }
    }
  }, [password, todo?.description, todo?.is_encrypted, setIsDecrypted]);

  if (todo?.is_encrypted && !decrypedDescription) {
    return (
      <Card
        className={clsx("flex flex-col border-2 border-gray-700 rounded-md", {
          "border-red-300": !decrypedDescription && password && !success,
          "border-green-300 animate-pulse": success,
        })}
      >
        <div className="flex justify-center align-center">
          <p className={clsx("text-gray-400")}>Encrypted</p>
          {success ? (
            <HiLockOpen className="text-green-500 hover:text-green-700 h-6 ml-1 animate-pulse" />
          ) : (
            <HiLockClosed className="text-gray-500 hover:text-gray-700 h-6 ml-1" />
          )}
        </div>
        <TextInput
          type="password"
          placeholder="Password"
          readOnly={success}
          sizing="sm"
          theme={{
            field: {
              input: {
                colors: {
                  failure:
                    "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-200 dark:focus:border-red-500 dark:focus:ring-red-500",
                },
              },
            },
          }}
          color={success ? "success" : password ? "failure" : undefined}
          rightIcon={() => <FaLock className="h-3 text-gray-500" />}
          onChange={(e) => {
            debouncePassword(e.target.value);
          }}
        />
        <div className="flex justify-end items-end">
          <Tooltip
            content={
              <p className="w-60">
                This task is encrypted. Enter the password provided by the task
                creator to view the description.
              </p>
            }
          >
            <FaCircleInfo className="text-gray-500" />
          </Tooltip>
        </div>
      </Card>
    );
  }

  return <p>{decrypedDescription ?? todo?.description}</p>;
};
