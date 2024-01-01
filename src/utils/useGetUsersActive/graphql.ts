import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query GetUsersActive($get_users_input: get_users_input!) {
    get_users(get_users_input: $get_users_input) {
      uuid
      last_active
    }
  }
`;
