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
