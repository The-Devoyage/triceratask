import { FC, useContext, useState, useEffect } from "react";
import { ViewTodoContext } from "src/pages/todos/view/context";
import { ViewGetTodoQuery } from "src/pages/todos/view/context/graphql.generated";
import Crypto from "crypto-js";
import { Todo } from "src/types/generated";
import { Tooltip } from "flowbite-react";
import { useWindowSize } from "src/utils/useWindowSize";

export const EncryptedNewValue: FC<{
  history: ViewGetTodoQuery["get_todo"]["history"][0];
  attemptDecrypt?: boolean;
}> = ({ history, attemptDecrypt }) => {
  const { isDecrypted, password } = useContext(ViewTodoContext);
  const [decrypted, setDecrypted] = useState<string | null>(null);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    if (!attemptDecrypt) setDecrypted(history?.new_value ?? "");
    if (password && !isDecrypted && history?.new_value) {
      const value = Crypto.AES.decrypt(history?.new_value, password);
      try {
        const decrypted = value.toString(Crypto.enc.Utf8);
        if (!decrypted) throw new Error("Decryption failed.");
        const todo: Pick<Todo, "description"> = JSON.parse(decrypted);
        setDecrypted(todo.description);
      } catch (error) {
        console.warn(error);
      }
    } else if (password && isDecrypted && history?.new_value) {
      return;
    } else if (isDecrypted && history?.new_value && !password) {
      setDecrypted(history.new_value);
    } else {
      setDecrypted(null);
    }
  }, [password, isDecrypted, history, attemptDecrypt]);

  const handleNewValue = (
    newValue: string | null | undefined,
    truncate: boolean
  ) => {
    if (newValue === "0") return "No";
    if (newValue === "1") return "Yes";

    if (truncate) {
      if ((newValue?.length ?? 0) > 100) {
        return `${newValue?.slice(0, 100)}...`;
      }
    }
    return newValue;
  };

  if (decrypted)
    return (
      <Tooltip
        content={handleNewValue(decrypted, false)}
        placement={isMobile ? "top" : "left"}
      >
        <span>{handleNewValue(decrypted, true)}</span>
      </Tooltip>
    );

  return <span>Encrypted.</span>;
};
