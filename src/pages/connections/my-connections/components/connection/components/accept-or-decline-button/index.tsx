import { Button } from "flowbite-react";
import { userUuidVar } from "src/state";
import { getOperationName } from "@apollo/client/utilities";
import { LIST_CONNECTIONS } from "../../../../graphql";
import { FC } from "react";
import { ListConnectionsQuery } from "../../../../graphql.generated";
import { useUpdateUserConnectionsMutation } from "../../graphql.generated";
import { useToaster } from "src/utils/useToaster";
import { NEW_CONNECTIONS } from "src/views/sidebar/graphql";

export const AcceptOrDeclineButton: FC<{
  connection: ListConnectionsQuery["get_user_connections"]["data"][0];
  onComplete?: () => void;
}> = ({ connection, onComplete }) => {
  const toaster = useToaster();
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
            uuid: connection?.uuid,
          },
          values: {
            accepted: true,
            revoked: false,
          },
        },
      },
      refetchQueries: [
        getOperationName(LIST_CONNECTIONS)!,
        getOperationName(NEW_CONNECTIONS)!,
      ],
      onCompleted: () => {
        toaster.addToast("success", "Connection accepted.");
        onComplete && onComplete();
      },
    });
  };

  const handleDecline = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    updateUserConnection({
      variables: {
        update_user_connections_input: {
          query: {
            uuid: connection?.uuid,
          },
          values: {
            revoked: true,
            accepted: false,
          },
        },
      },
      refetchQueries: [
        getOperationName(LIST_CONNECTIONS)!,
        getOperationName(NEW_CONNECTIONS)!,
      ],
      onCompleted: () => {
        toaster.addToast("success", "Connection declined.");
        onComplete && onComplete();
      },
    });
  };

  if (
    connection?.connected_user?.data?.uuid === userUuidVar() &&
    !connection?.accepted
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
