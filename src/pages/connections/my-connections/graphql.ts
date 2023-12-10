import { gql } from "@apollo/client";

export const LIST_CONNECTIONS = gql`
  query ListConnections(
    $get_user_connections_input: get_user_connections_input!
    $get_user_input: get_user_input!
    $get_connected_user_input: get_user_input!
  ) {
    get_user_connections(
      get_user_connections_input: $get_user_connections_input
    ) {
      uuid
      identifier
      revoked
      revoked_at
      status
      accepted
      accepted_at
      user(user: $get_user_input) {
        uuid
        identifier
        profile_img
      }
      connected_user(connected_user: $get_connected_user_input) {
        uuid
        identifier
        profile_img
        last_active
      }
    }
  }
`;
