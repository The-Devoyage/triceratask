import { Button } from "flowbite-react";
import { userUuidVar } from "src/state";
import { getOperationName } from "@apollo/client/utilities";
import { FC } from "react";
import { ListConnectionsQuery } from "src/pages/connections/my-connections/graphql.generated";
import { useUpdateUserConnectionsMutation } from "../../graphql.generated";
import { LIST_CONNECTIONS } from "src/pages/connections/my-connections/graphql";
import { useToaster } from "src/utils/useToaster";
import { MdGroupRemove } from "react-icons/md";

export const RevokeButton: FC<{
  connection: ListConnectionsQuery["get_user_connections"][0];
  onComplete?: () => void;
}> = ({ connection, onComplete }) => {
  const toaster = useToaster();
  const [
    updateUserConnection,
    { loading },
  ] = useUpdateUserConnectionsMutation();

  const handleRevoke = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    updateUserConnection({
      variables: {
        update_user_connections_input: {
          query: {
            AND: [
              {
                uuid: connection.uuid,
              },
            ],
            OR: [
              {
                created_by: userUuidVar(),
              },
              {
                connected_user_uuid: userUuidVar(),
              },
            ],
          },
          values: {
            revoked: true,
            updated_by: userUuidVar(),
          },
        },
      },
      refetchQueries: [getOperationName(LIST_CONNECTIONS) ?? ""],
      onCompleted: () => {
        toaster.addToast("success", "Connection revoked.");
      },
    });
    onComplete && onComplete();
  };

  if (
    (!connection.accepted &&
      !connection.revoked &&
      connection.user_uuid.uuid === userUuidVar()) ||
    connection.accepted
  )
    return (
      <Button
        size="small"
        color="failure"
        className="text-sm px-2 py-1"
        onClick={handleRevoke}
        isProcessing={loading}
      >
        <MdGroupRemove className="mr-1" />
        <span className="hidden md:inline">Revoke</span>
      </Button>
    );
};
