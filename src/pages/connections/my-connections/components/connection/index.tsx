import { FC } from "react";
import { Avatar, Badge, TabsRef } from "flowbite-react";
import { ListConnectionsQuery } from "../../graphql.generated";
import {
  AcceptOrDeclineButton,
  ReinviteButton,
  RevokeButton,
} from "./components";
import { userUuidVar } from "src/state";
import { ConnectionTabs } from "src/pages/connections";
import { appRoutes } from "src/routes";
import { useNavigate } from "react-router-dom";
import { useIsUserActive } from "src/utils/useIsUserActive";
import dayjs from "src/utils/dayjs";

export const Connection: FC<{
  connection: ListConnectionsQuery["get_user_connections"][0];
  activeTab: ConnectionTabs;
  tabsRef?: TabsRef;
  setActiveTab: (index: number) => void;
}> = ({ connection, activeTab, setActiveTab }) => {
  const navigate = useNavigate();
  const isActive = useIsUserActive(
    connection?.connected_user_uuid.uuid === userUuidVar()
      ? connection?.user_uuid.uuid
      : connection?.connected_user_uuid.uuid,
    !connection?.connected_user_uuid.uuid || !connection?.accepted
  );

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
        text: dayjs.tz(connection?.accepted_at).format("MMMM DD, YYYY"),
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

  const getUuid = () => {
    switch (activeTab) {
      case ConnectionTabs.Connections:
        if (connection?.connected_user_uuid.uuid === userUuidVar())
          return connection?.user_uuid.uuid;
        return connection?.connected_user_uuid.uuid;
      case ConnectionTabs.Invites:
        return connection?.user_uuid.uuid;
      case ConnectionTabs.Invited:
        return connection?.connected_user_uuid.uuid ?? connection?.identifier;
      default:
        return connection?.connected_user_uuid.uuid;
    }
  };

  const getProfileImage = () => {
    if (connection?.connected_user_uuid.uuid === userUuidVar())
      return connection?.user_uuid.profile_img;
    return connection?.connected_user_uuid.profile_img;
  };

  return (
    <div
      className="flex justify-between py-4 border-b border-gray-200 hover:bg-gray-100 hover:dark:bg-gray-700 cursor-pointer p-3"
      onClick={() =>
        navigate(appRoutes.profile.path.replace(":uuid", getUuid()))
      }
      role="button"
    >
      <div className="flex">
        <Avatar
          img={getProfileImage() ?? ""}
          className="mr-2"
          status={
            connection?.accepted ? (isActive ? "online" : "offline") : undefined
          }
          size="lg"
        />
        <div className="flex flex-col justify-start align-start">
          <h4 className="text-xl font-bold">{getIdentifier()}</h4>
          <div className="text-sm flex">
            <Badge color={getBadge().color}>{getBadge().text}</Badge>
          </div>
        </div>
      </div>
      <div>
        <AcceptOrDeclineButton
          connection={connection}
          onComplete={() => setActiveTab(0)}
        />
        <RevokeButton
          connection={connection}
          onComplete={() =>
            activeTab === ConnectionTabs.Connections && setActiveTab(2)
          }
        />
        <ReinviteButton
          connection={connection}
          onComplete={() => setActiveTab(2)}
        />
      </div>
    </div>
  );
};
