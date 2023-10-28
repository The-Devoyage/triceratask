import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUserLastActive($get_user_input: get_user_input!) {
    get_user(get_user_input: $get_user_input) {
      uuid
      last_active
    }
  }
`;
