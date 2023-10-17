import { Button } from "flowbite-react";
import { userUuidVar } from "src/state";
import { getOperationName } from "@apollo/client/utilities";
import { FC } from "react";
import { ListConnectionsQuery } from "src/pages/connections/my-connections/graphql.generated";
import { LIST_CONNECTIONS } from "src/pages/connections/my-connections/graphql";
import { useUpdateUserConnectionsMutation } from "../../graphql.generated";

export const ReinviteButton: FC<{
  connection: ListConnectionsQuery["get_user_connections"][0];
}> = ({ connection }) => {
  const [
    updateUserConnection,
    { loading },
  ] = useUpdateUserConnectionsMutation();

  const handleReinvite = () => {
    updateUserConnection({
      variables: {
        update_user_connections_input: {
          query: {
            uuid: connection.uuid,
          },
          revoked: false,
          updated_by: userUuidVar(),
        },
      },
      refetchQueries: [getOperationName(LIST_CONNECTIONS) ?? ""],
    });
  };

  if (connection.revoked && connection.user_uuid.uuid === userUuidVar())
    return (
      <Button
        size="small"
        color="success"
        className="text-sm px-2 py-1"
        onClick={handleReinvite}
        isProcessing={loading}
      >
        Invite Again
      </Button>
    );
};
