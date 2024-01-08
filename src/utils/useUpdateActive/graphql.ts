import { gql } from "@apollo/client";

export const UPDATE_USER_LAST_ACTIVE = gql`
  mutation UpdateUserLastActive($update_users_input: update_users_input!) {
    update_users(update_users_input: $update_users_input) {
      data {
        uuid
        last_active
      }
    }
  }
`;
