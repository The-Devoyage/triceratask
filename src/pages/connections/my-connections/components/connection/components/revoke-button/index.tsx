import { Button, Spinner } from "flowbite-react";
import { userUuidVar } from "src/state";
import { getOperationName } from "@apollo/client/utilities";
import { FC } from "react";
import { ListConnectionsQuery } from "src/pages/connections/my-connections/graphql.generated";
import { useUpdateUserConnectionsMutation } from "../../graphql.generated";
import { LIST_CONNECTIONS } from "src/pages/connections/my-connections/graphql";
import { useToaster } from "src/utils/useToaster";
import { MdGroupRemove } from "react-icons/md";
import clsx from "clsx";

export const RevokeButton: FC<{
  connection: ListConnectionsQuery["get_user_connections"]["data"][0];
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
            uuid: connection.uuid,
          },
          values: {
            revoked: true,
            accepted: false,
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
      connection.user?.data.uuid === userUuidVar()) ||
    connection.accepted
  )
    return (
      <Button
        size="small"
        color="failure"
        className={clsx("text-sm px-2 py-1", {
          "animate-pulse": loading,
        })}
        onClick={handleRevoke}
      >
        {loading ? (
          <Spinner className="mr-1" size="sm" />
        ) : (
          <MdGroupRemove className="mr-1" />
        )}
        <span className="hidden md:inline">Revoke</span>
      </Button>
    );
};
