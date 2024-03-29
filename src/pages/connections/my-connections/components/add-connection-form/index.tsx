import { forwardRef, useEffect } from "react";
import { Button, Card } from "flowbite-react";
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
import { DropdownSelect } from "src/components/dropdown-select";
import { HiPlus } from "react-icons/hi";

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
          <div className="grid grid-cols-12 gap-2 my-4">
            <DropdownSelect
              {...rest}
              placeholder="Identifier"
              onSelected={(user) => reset({ identifier: user?.identifier })}
              inputRef={(e) => {
                ref(e);
                (inputRef as React.MutableRefObject<HTMLInputElement>).current = e as HTMLInputElement;
              }}
              options={data?.get_users.data
                ?.filter((user) =>
                  user?.identifier
                    .toLowerCase()
                    .includes(identifier?.toLowerCase() ?? "")
                )
                .splice(0, 5)
                .map((user) => ({
                  value: user,
                  label: (
                    <>
                      <UserAvatar user={user} />
                      <h1 className="ml-2">{user?.identifier}</h1>
                    </>
                  ),
                }))}
              containerClassName="col-span-10"
            />
            <Button
              type="submit"
              isProcessing={loading}
              gradientDuoTone="purpleToBlue"
              outline
              className="col-span-2"
              disabled={
                !identifier || identifier === userIdentifierVar()?.toLowerCase()
              }
            >
              <HiPlus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
});
