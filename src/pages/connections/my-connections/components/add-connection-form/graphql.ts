import { gql } from "@apollo/client";

export const CREATE_CONNECTION = gql`
  mutation CreateConnection(
    $create_user_connection_input: create_user_connection_input!
  ) {
    create_user_connection(
      create_user_connection_input: $create_user_connection_input
    ) {
      uuid
    }
  }
`;
