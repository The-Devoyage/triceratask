import { Button, Spinner } from "flowbite-react";
import { userUuidVar } from "src/state";
import { getOperationName } from "@apollo/client/utilities";
import { FC } from "react";
import { ListConnectionsQuery } from "src/pages/connections/my-connections/graphql.generated";
import { LIST_CONNECTIONS } from "src/pages/connections/my-connections/graphql";
import { useUpdateUserConnectionsMutation } from "../../graphql.generated";
import { useToaster } from "src/utils/useToaster";

export const ReinviteButton: FC<{
  connection: ListConnectionsQuery["get_user_connections"]["data"][0];
  onComplete?: () => void;
}> = ({ connection, onComplete }) => {
  const toaster = useToaster();
  const [
    updateUserConnection,
    { loading },
  ] = useUpdateUserConnectionsMutation();

  const handleReinvite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    updateUserConnection({
      variables: {
        update_user_connections_input: {
          query: {
            uuid: connection.uuid,
          },
          values: {
            revoked: false,
          },
        },
      },
      refetchQueries: [getOperationName(LIST_CONNECTIONS) ?? ""],
      onCompleted: () => {
        toaster.addToast("success", "User invite sent again.");
      },
    });
    onComplete && onComplete();
  };

  if (connection.revoked && connection.user?.data.uuid === userUuidVar())
    return (
      <Button
        size="small"
        color="success"
        className="text-sm px-2 py-1"
        onClick={handleReinvite}
      >
        {loading ? <Spinner size="sm" className="mr-1" /> : null}
        Invite Again
      </Button>
    );
};
