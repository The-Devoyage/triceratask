import { Alert, Button, Dropdown } from "flowbite-react";
import { HiBell, HiClipboardCheck } from "react-icons/hi";
import {
  NavbarGetNotificationsDocument,
  NavbarGetNotificationsQuery,
  useNavbarGetNotificationsQuery,
  useNavbarUpdateNotificationsMutation,
} from "./graphql.generated";
import { useNavigate } from "react-router-dom";
import dayjs from "src/utils/dayjs";
import { appRoutes } from "src/routes";
import { UserAvatar } from "src/components";
import { userUuidVar } from "src/state";
import { LuPartyPopper } from "react-icons/lu";
import { Notification } from "src/types/generated.ts";
import { useToaster } from "src/utils/useToaster";

const NOTIFICATION_TYPES = {
  TODO_MODIFIED: "todo_modified",
  TODO_SHARED: "todo_shared",
  TODO_ACCESS_UPDATED: "todo_access_updated",
  TODO_ACCESS_REVOKED: "todo_access_revoked",
  TODO_ACCESS_REENABLED: "todo_access_reenabled",
};

export const NotificationsDropdown = () => {
  const navigate = useNavigate();
  const toaster = useToaster();
  const { data } = useNavbarGetNotificationsQuery({
    pollInterval: 10000,
    variables: {
      get_notifications_input: {
        query: {
          read: false,
          user: {
            uuid: userUuidVar(),
          },
        },
      },
    },
  });
  const [updateNotifications] = useNavbarUpdateNotificationsMutation();
  const notifications = data?.get_notifications ?? [];

  const markRead = (uuid: Notification["uuid"], callback?: () => void) => {
    updateNotifications({
      variables: {
        update_notifications_input: {
          query: {
            uuid,
          },
          values: {
            read: true,
          },
        },
      },
      onCompleted: callback,
      onError: () => {
        toaster.addToast("error", "Failed to mark notification read.");
      },
      refetchQueries: [NavbarGetNotificationsDocument],
    });
  };

  const getNotificationDropdownAction = (
    notification: NavbarGetNotificationsQuery["get_notifications"][0]
  ) => {
    switch (notification.notification_message.identifier) {
      case NOTIFICATION_TYPES.TODO_MODIFIED:
      case NOTIFICATION_TYPES.TODO_SHARED:
      case NOTIFICATION_TYPES.TODO_ACCESS_UPDATED:
      case NOTIFICATION_TYPES.TODO_ACCESS_REENABLED:
        return () => {
          markRead(notification.uuid, () => {
            // If on same page, reload
            if (
              window.location.pathname ===
              appRoutes.viewTodo.path.replace(":uuid", notification.todo!.uuid!)
            ) {
              window.location.reload();
              return;
            }
            navigate(
              appRoutes.viewTodo.path.replace(":uuid", notification.todo!.uuid!)
            );
          });
        };
      case NOTIFICATION_TYPES.TODO_ACCESS_REVOKED:
        return () => {
          markRead(notification.uuid);
        };
    }
  };

  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <Button outline gradientMonochrome="teal" className="h-full mx-1">
          <HiBell className="h-4" />
          {notifications?.length > 0 && (
            <div className="absolute -top-1 -left-1 rounded-full bg-teal-500 text-white text-xs px-1">
              {notifications.length}
            </div>
          )}
        </Button>
      }
    >
      <Dropdown.Header>Notifications</Dropdown.Header>
      {notifications.length ? (
        notifications?.map((notification) => (
          <Dropdown.Item
            key={notification.uuid}
            onClick={getNotificationDropdownAction(notification)}
          >
            <div className="flex row items-start w-72">
              <div className="flex rounded overflow-hidden h-12 w-12">
                <UserAvatar user={notification.created_by} size="sm" tooltip />
              </div>
              <div className="flex justify-between ml-2 w-full">
                <div>
                  <div className="text-sm text-left">
                    {notification.notification_message.message}
                  </div>
                  <div className="text-xs text-left text-gray-500">
                    <HiClipboardCheck className="inline-block mr-1 h-4 w-4" />"
                    {notification.todo?.title}"
                  </div>
                </div>
                <div className="text-xs text-gray-500 text-right">
                  {dayjs(notification.created_at).fromNow()}
                </div>
              </div>
            </div>
          </Dropdown.Item>
        ))
      ) : (
        <Dropdown.Item>
          <Alert
            color="info"
            icon={LuPartyPopper}
            className="flex justify-center items-center p-2 w-48"
          >
            All caught up!
          </Alert>
        </Dropdown.Item>
      )}
    </Dropdown>
  );
};