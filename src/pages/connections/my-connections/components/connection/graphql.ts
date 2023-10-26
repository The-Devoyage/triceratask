import { gql } from "@apollo/client";

export const UPDATE_USER_CONNECTIONS = gql`
  mutation UpdateUserConnections(
    $update_user_connections_input: update_user_connections_input!
  ) {
    update_user_connections(
      update_user_connections_input: $update_user_connections_input
    ) {
      uuid
    }
  }
`;

export const GET_USER = gql`
  query GetUserLastActive($get_user_input: get_user_input!) {
    get_user(get_user_input: $get_user_input) {
      uuid
      last_active
    }
  }
`;
