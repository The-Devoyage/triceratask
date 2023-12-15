import { FC, createContext, useMemo, useEffect, useState } from "react";
import { ViewGetTodoQuery, useViewGetTodoQuery } from "./graphql.generated";
import { Todo } from "src/types/generated";
import { userUuidVar } from "src/state";

interface ViewTodoContext {
  isDecrypted: boolean;
  setIsDecrypted: (value: boolean) => void;
  todo?: ViewGetTodoQuery["get_todo"] | null;
  userAccess?: ViewGetTodoQuery["get_todo"]["access"][0] | null;
  loading: boolean;
  password: string;
  setPassword: (value: string) => void;
}

export const ViewTodoContext = createContext<ViewTodoContext>({
  todo: null,
  userAccess: null,
  isDecrypted: false,
  setIsDecrypted: () => {},
  loading: false,
  password: "",
  setPassword: () => {},
});

export const ViewTodoProvider: FC<{
  uuid: Todo["uuid"];
  children: React.ReactNode;
}> = ({ uuid, children }) => {
  const [isDecrypted, setIsDecrypted] = useState(false);
  const [password, setPassword] = useState("");
  const { data, loading } = useViewGetTodoQuery({
    variables: {
      get_todo_input: {
        query: {
          uuid,
          access: {
            user: { uuid: userUuidVar() },
            revoked: false,
          },
        },
      },
      get_todo_historys_input: {
        query: {},
      },
      get_todo_accesss_input: {
        query: {},
      },
    },
    fetchPolicy: "cache-and-network",
  });
  const todo = data?.get_todo;
  const userAccess = todo?.access.find((a) => a?.user?.uuid === userUuidVar());

  useEffect(() => {
    setIsDecrypted(!todo?.is_encrypted);
  }, [todo]);

  const value = useMemo(
    () => ({
      todo,
      isDecrypted,
      loading,
      userAccess,
      setIsDecrypted,
      password,
      setPassword,
    }),
    [todo, loading, userAccess, isDecrypted, password]
  );

  return (
    <ViewTodoContext.Provider value={value}>
      {children}
    </ViewTodoContext.Provider>
  );
};
