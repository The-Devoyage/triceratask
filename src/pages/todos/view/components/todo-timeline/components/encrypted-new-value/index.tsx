import { FC, useContext, useState, useEffect } from "react";
import { ViewTodoContext } from "src/pages/todos/view/context";
import Crypto from "crypto-js";
import { Todo } from "src/types/generated";
import { Tooltip } from "flowbite-react";
import { useWindowSize } from "src/utils/useWindowSize";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { TodoTimelineGetHistoriesQuery } from "../../graphql.generated";
import dayjs from "src/utils/dayjs";

const dateColumns = ["created_at", "updated_at", "completed_at", "goal_date"];

export const EncryptedNewValue: FC<{
  history: TodoTimelineGetHistoriesQuery["get_todo_historys"]["data"][0];
  attemptDecrypt?: boolean;
}> = ({ history, attemptDecrypt }) => {
  const { isDecrypted, password } = useContext(ViewTodoContext);
  const [decrypted, setDecrypted] = useState<string | null>(null);
  const { isMobile } = useWindowSize();
  const isDate = dateColumns.includes(history?.property);

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
    if (isDate) {
      return dayjs.tz(newValue).local().format("MMMM D, YYYY h:mm A");
    }
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
        content={
          <ReactMarkdown
            className="prose dark:prose-invert"
            remarkPlugins={[remarkGfm]}
          >
            {handleNewValue(decrypted, false)}
          </ReactMarkdown>
        }
        placement={isMobile ? "top" : "left"}
        theme={{
          content: "w-64 break-words max-h-72 overflow-y-auto",
          target: "break-all",
        }}
      >
        <ReactMarkdown
          className="prose dark:prose-invert"
          remarkPlugins={[remarkGfm]}
        >
          {handleNewValue(decrypted, true)}
        </ReactMarkdown>
      </Tooltip>
    );

  return <span className="ml-1">Encrypted.</span>;
};
