import { Avatar, Badge } from "flowbite-react";
import { FC } from "react";
import { ListConnectionsQuery } from "../../graphql.generated";
import {
  AcceptOrDeclineButton,
  ReinviteButton,
  RevokeButton,
} from "./components";
import { userUuidVar } from "src/state";
import { ConnectionTabs } from "src/pages/connections";

export const Connection: FC<{
  connection: ListConnectionsQuery["get_user_connections"][0];
  activeTab: ConnectionTabs;
}> = ({ connection, activeTab }) => {
  const getBadge = () => {
    if (connection.revoked)
      return {
        color: "failure",
        text: "Revoked",
      };
    if (!connection.accepted)
      return {
        color: "warning",
        text: "Pending",
      };
    if (connection.status)
      return {
        color: "success",
        text: "Active",
      };
    return {
      color: "danger",
      text: "Inactive",
    };
  };

  const getIdentifier = () => {
    switch (activeTab) {
      case ConnectionTabs.Connections:
        if (connection?.connected_user_uuid.uuid === userUuidVar())
          return connection?.user_uuid.identifier;
        return connection?.connected_user_uuid.identifier;
      case ConnectionTabs.Invites:
        return connection?.user_uuid.identifier;
      case ConnectionTabs.Invited:
        return (
          connection?.connected_user_uuid.identifier ?? connection?.identifier
        );
      default:
        return connection?.connected_user_uuid.identifier;
    }
  };

  const getProfileImage = () => {
    if (connection?.connected_user_uuid.uuid === userUuidVar())
      return connection?.user_uuid.profile_img;
    return connection?.connected_user_uuid.profile_img;
  };

  return (
    <div className="flex justify-between py-4 border-b border-gray-200">
      <div className="flex align-start">
        <Avatar img={getProfileImage() ?? ""} className="mr-2" />
        <div className="flex flex-col justify-start items-start">
          <h4 className="text-xl font-bold">{getIdentifier()}</h4>
          <div className="text-sm flex">
            <Badge color={getBadge().color}>{getBadge().text}</Badge>
          </div>
        </div>
      </div>
      <div className="flex align-start">
        <AcceptOrDeclineButton connection={connection} />
        <RevokeButton connection={connection} />
        <ReinviteButton connection={connection} />
      </div>
    </div>
  );
};
