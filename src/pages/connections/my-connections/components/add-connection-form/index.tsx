import { forwardRef, useEffect, useState } from "react";
import { Button, TextInput, Card } from "flowbite-react";
import {
  useCreateConnectionMutation,
  useGetUsersAddConnectionInputLazyQuery,
} from "./graphql.generated";
import { useForm } from "react-hook-form";
import { Create_User_Connection_Input } from "src/types/generated";
import { useToaster } from "src/utils/useToaster";
import { userIdentifierVar, userUuidVar } from "src/state";
import { LIST_CONNECTIONS } from "../../graphql";
import { getOperationName } from "@apollo/client/utilities";
import { UserAvatar } from "src/components";

export const AddConnection = forwardRef<
  HTMLInputElement,
  { className: string; setActiveTab: (index: number) => void }
>(({ className, setActiveTab }, inputRef) => {
  const [createConnection, { loading }] = useCreateConnectionMutation({
    refetchQueries: [getOperationName(LIST_CONNECTIONS)!],
  });
  const [getUsers, { data }] = useGetUsersAddConnectionInputLazyQuery();
  const { register, handleSubmit, reset, watch } = useForm<
    Create_User_Connection_Input["values"]
  >();
  const toaster = useToaster();
  const [showDropdown, setShowDropdown] = useState(false);
  const identifier = watch("identifier");

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ref, ...rest } = register("identifier");

  useEffect(() => {
    getUsers({
      variables: {
        get_users_input: {
          query: {},
        },
      },
    });
  }, [getUsers]);

  const onSubmit = handleSubmit(async (data) => {
    setActiveTab(2);
    await createConnection({
      variables: {
        create_user_connection_input: {
          values: {
            identifier: data.identifier,
            user_uuid: userUuidVar() ?? "",
            created_by: userUuidVar() ?? "",
            updated_by: userUuidVar() ?? "",
          },
        },
      },
      onCompleted: () => {
        toaster.addToast("success", "Connection Created!");
        reset();
        setActiveTab(2);
      },
      onError: (error) => {
        toaster.addToast("error", error.message);
      },
    });
  });

  return (
    <Card className={className}>
      <form onSubmit={onSubmit} className="flex flex-col">
        <div className="flex flex-col justify-between">
          <h4 className="text-xl font-bold">Connect with a Friend</h4>
          <div className="my-4 relative">
            <TextInput
              {...rest}
              placeholder="Identifier"
              onFocus={() => setShowDropdown(true)}
              onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              autoComplete="off"
              ref={(e) => {
                ref(e);
                (inputRef as React.MutableRefObject<HTMLInputElement>).current = e as HTMLInputElement;
              }}
            />
            <div className="my-4 absolute bg-slate-900 w-full z-50 rounded-md">
              {showDropdown &&
                data?.get_users
                  ?.filter((user) =>
                    user.identifier
                      .toLowerCase()
                      .includes(identifier?.toLowerCase() ?? "")
                  )
                  .splice(0, 5)
                  .map((user) => (
                    <div
                      role="button"
                      className="flex items-start hover:bg-slate-600 p-2 cursor-pointer rounded-md"
                      key={user.uuid}
                      onClick={() => {
                        reset({ identifier: user.identifier });
                      }}
                    >
                      <UserAvatar user={user} />
                      <h1>{user?.identifier}</h1>
                    </div>
                  ))}
            </div>
          </div>
        </div>
        <Button
          type="submit"
          isProcessing={loading}
          className="self-end"
          disabled={
            !identifier || identifier === userIdentifierVar()?.toLowerCase()
          }
        >
          Connect
        </Button>
      </form>
    </Card>
  );
});
