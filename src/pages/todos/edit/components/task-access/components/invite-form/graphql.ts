import { gql } from "@apollo/client";

export const TaskAccessSelectGetConnections = gql`
  query TaskAccessSelectGetConnections(
    $get_user_connections_input: get_user_connections_input!
    $get_user_input: get_user_input!
    $get_connected_user_input: get_user_input!
  ) {
    get_user_connections(
      get_user_connections_input: $get_user_connections_input
    ) {
      data {
        uuid
        user(user: $get_user_input) {
          data {
            uuid
            identifier
            profile_img
          }
        }
        connected_user(connected_user: $get_connected_user_input) {
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

export const TaskAccessCreateAccess = gql`
  mutation TaskAccessCreateAccess(
    $create_todo_access_input: create_todo_access_input!
  ) {
    create_todo_access(create_todo_access_input: $create_todo_access_input) {
      data {
        uuid
      }
    }
  }
`;
