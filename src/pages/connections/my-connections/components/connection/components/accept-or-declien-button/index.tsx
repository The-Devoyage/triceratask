import { Button } from "flowbite-react";
import { userUuidVar } from "src/state";
import { getOperationName } from "@apollo/client/utilities";
import { LIST_CONNECTIONS } from "../../../../graphql";
import { FC } from "react";
import { ListConnectionsQuery } from "../../../../graphql.generated";
import { useUpdateUserConnectionsMutation } from "../../graphql.generated";

export const AcceptOrDeclineButton: FC<{
  connection: ListConnectionsQuery["get_user_connections"][0];
}> = ({ connection }) => {
  const [
    updateUserConnection,
    { loading },
  ] = useUpdateUserConnectionsMutation();

  const handleAccept = () => {
    updateUserConnection({
      variables: {
        update_user_connections_input: {
          query: {
            uuid: connection.uuid,
          },
          accepted: true,
          updated_by: userUuidVar(),
        },
      },
      refetchQueries: [getOperationName(LIST_CONNECTIONS) ?? ""],
    });
  };

  const handleDecline = () => {
    updateUserConnection({
      variables: {
        update_user_connections_input: {
          query: {
            uuid: connection.uuid,
          },
          revoked: true,
          updated_by: userUuidVar(),
        },
      },
      refetchQueries: [getOperationName(LIST_CONNECTIONS) ?? ""],
    });
  };

  console.log(userUuidVar(), connection.connected_user_uuid.uuid);

  if (
    connection.connected_user_uuid.uuid === userUuidVar() &&
    !connection.accepted
  )
    return (
      <Button.Group>
        <Button
          size="small"
          color="success"
          className="text-sm px-2 py-1"
          onClick={handleAccept}
          isProcessing={loading}
        >
          Accept
        </Button>
        <Button
          size="small"
          color="failure"
          className="text-sm px-2 py-1"
          onClick={handleDecline}
          isProcessing={loading}
        >
          Decline
        </Button>
      </Button.Group>
    );
};
