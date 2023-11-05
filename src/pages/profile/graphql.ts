import { gql } from "@apollo/client";

export const UPDATE_USERS = gql`
  mutation UpdateUserProfile($update_users_input: update_users_input!) {
    update_users(update_users_input: $update_users_input) {
      uuid
      identifier
      profile_img
      created_at
      share_active
    }
  }
`;
