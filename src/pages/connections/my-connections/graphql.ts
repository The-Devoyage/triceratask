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
      user_uuid(user_uuid: $get_user_input) {
        uuid
        identifier
        profile_img
      }
      connected_user_uuid(connected_user_uuid: $get_connected_user_input) {
        uuid
        identifier
        profile_img
      }
    }
  }
`;
