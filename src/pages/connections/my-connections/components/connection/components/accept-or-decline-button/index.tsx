import { Button } from "flowbite-react";
import { userUuidVar } from "src/state";
import { getOperationName } from "@apollo/client/utilities";
import { LIST_CONNECTIONS } from "../../../../graphql";
import { FC } from "react";
import { ListConnectionsQuery } from "../../../../graphql.generated";
import { useUpdateUserConnectionsMutation } from "../../graphql.generated";

export const AcceptOrDeclineButton: FC<{
  connection: ListConnectionsQuery["get_user_connections"][0];
  onComplete?: () => void;
}> = ({ connection, onComplete }) => {
  const [
    updateUserConnection,
    { loading },
  ] = useUpdateUserConnectionsMutation();

  const handleAccept = (e: React.MouseEvent<HTMLButtonElement>) => {
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
            accepted: true,
            updated_by: userUuidVar(),
          },
        },
      },
      refetchQueries: [getOperationName(LIST_CONNECTIONS) ?? ""],
    });
    onComplete && onComplete();
  };

  const handleDecline = (e: React.MouseEvent<HTMLButtonElement>) => {
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
    });
    onComplete && onComplete();
  };

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
