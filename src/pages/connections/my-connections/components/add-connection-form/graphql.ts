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

export const GET_USERS = gql`
  query GetUsers($get_users_input: get_users_input!) {
    get_users(get_users_input: $get_users_input) {
      uuid
      identifier
      profile_img
    }
  }
`;
