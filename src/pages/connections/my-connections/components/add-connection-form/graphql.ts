import { gql } from "@apollo/client";

export const CREATE_CONNECTION = gql`
  mutation CreateConnection(
    $create_user_connection_input: create_user_connection_input!
  ) {
    create_user_connection(
      create_user_connection_input: $create_user_connection_input
    ) {
      data {
        uuid
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsersAddConnectionInput($get_users_input: get_users_input!) {
    get_users(get_users_input: $get_users_input) {
      data {
        uuid
        identifier
        profile_img
      }
    }
  }
`;
