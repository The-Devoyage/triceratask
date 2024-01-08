import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser($get_user_input: get_user_input!) {
    get_user(get_user_input: $get_user_input) {
      data {
        uuid
        identifier
        profile_img
        created_at
        share_active
        status
      }
    }
  }
`;
