import { gql } from "@apollo/client";

export const NAVBAR_GET_NOTIFICATIONS = gql`
  query NavbarGetNotifications(
    $get_notifications_input: get_notifications_input!
  ) {
    get_notifications(get_notifications_input: $get_notifications_input) {
      data {
        uuid
        user(user: { query: {} }) {
          data {
            uuid
            identifier
          }
        }
        created_at
        notification_message(notification_message: { query: {} }) {
          data {
            identifier
            message
          }
        }
        todo(todo: { query: {} }) {
          data {
            title
            uuid
          }
        }
        created_by(created_by: { query: {} }) {
          data {
            uuid
            identifier
            profile_img
          }
        }
      }
    }
  }
`;

export const NAVBAR_UPDATE_NOTIFICATIONS = gql`
  mutation NavbarUpdateNotifications(
    $update_notifications_input: update_notifications_input!
  ) {
    update_notifications(
      update_notifications_input: $update_notifications_input
    ) {
      data {
        uuid
      }
    }
  }
`;
