import { gql } from "@apollo/client";

export const NEW_CONNECTIONS = gql`
  query NewConnectionsSidebar(
    $get_user_connections_input: get_user_connections_input!
  ) {
    get_user_connections(
      get_user_connections_input: $get_user_connections_input
    ) {
      uuid
    }
  }
`;
