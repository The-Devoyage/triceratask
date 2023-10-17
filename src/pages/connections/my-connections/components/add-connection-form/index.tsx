import { Button, TextInput, Card } from "flowbite-react";
import { forwardRef } from "react";
import { useCreateConnectionMutation } from "./graphql.generated";
import { useForm } from "react-hook-form";
import { Create_User_Connection_Input } from "src/types/generated";
import { useToaster } from "src/utils/useToaster";
import { userUuidVar } from "src/state";
import { LIST_CONNECTIONS } from "../../graphql";
import { getOperationName } from "@apollo/client/utilities";

export const AddConnection = forwardRef<
  HTMLInputElement,
  { className: string; setActiveTab: (index: number) => void }
>(({ className, setActiveTab }, inputRef) => {
  const [createConnection, { loading }] = useCreateConnectionMutation({
    refetchQueries: [getOperationName(LIST_CONNECTIONS)!],
  });
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<Create_User_Connection_Input>();
  const toaster = useToaster();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { ref, ...rest } = register("identifier");

  const onSubmit = handleSubmit(async (data) => {
    setActiveTab(2);
    await createConnection({
      variables: {
        create_user_connection_input: {
          identifier: data.identifier,
          user_uuid: userUuidVar() ?? "",
          created_by: userUuidVar() ?? "",
          updated_by: userUuidVar() ?? "",
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
          <div className="my-4">
            <TextInput
              placeholder="Username"
              {...rest}
              ref={(e) => {
                ref(e);
                (inputRef as React.MutableRefObject<HTMLInputElement>).current = e as HTMLInputElement;
              }}
            />
          </div>
        </div>
        <Button type="submit" isProcessing={loading} className="self-end">
          Connect
        </Button>
      </form>
    </Card>
  );
});
