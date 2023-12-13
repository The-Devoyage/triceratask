import { FC, useState, useEffect } from "react";
import { Card, TextInput, Tooltip } from "flowbite-react";
import { Todo } from "src/types/generated";
import Crypto from "crypto-js";
import { HiLockClosed, HiLockOpen } from "react-icons/hi";
import clsx from "clsx";
import { FaCircleInfo, FaLock } from "react-icons/fa6";

export const EncrypedCard: FC<{
  todo: Pick<Todo, "description" | "is_encrypted">;
}> = ({ todo }) => {
  const [decryped, setDecrypted] = useState<string | null>(null);
  const [password, setPassword] = useState<string>("");
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
      const decrypted = value.toString(Crypto.enc.Utf8);
      if (decrypted) {
        setSuccess(true);
        setTimeout(() => {
          setDecrypted(JSON.parse(decrypted));
        }, 2000);
      }
    }
  }, [password, todo?.description, todo?.is_encrypted]);

  if (todo?.is_encrypted && !decryped) {
    return (
      <Card
        className={clsx("flex flex-col border-2 border-gray-700 rounded-md", {
          "border-red-300": !decryped && password && !success,
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
          sizing="sm"
          className="mb-3"
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

  return <p>{decryped ?? todo?.description}</p>;
};
