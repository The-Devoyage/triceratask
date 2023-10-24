import { Button } from "flowbite-react";
import { userUuidVar } from "src/state";
import { getOperationName } from "@apollo/client/utilities";
import { FC } from "react";
import { ListConnectionsQuery } from "src/pages/connections/my-connections/graphql.generated";
import { useUpdateUserConnectionsMutation } from "../../graphql.generated";
import { LIST_CONNECTIONS } from "src/pages/connections/my-connections/graphql";

export const RevokeButton: FC<{
  connection: ListConnectionsQuery["get_user_connections"][0];
}> = ({ connection }) => {
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
            updated_by: userUuidVar(),
          },
        },
      },
      refetchQueries: [getOperationName(LIST_CONNECTIONS) ?? ""],
    });
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
        Revoke
      </Button>
    );
};
