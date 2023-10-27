import { gql } from "@apollo/client";

export const UPDATE_USERS = gql`
  mutation UpdateUserProfile($update_users_input: update_users_input!) {
    update_users(update_users_input: $update_users_input) {
      uuid
      identifier
      profile_img
      created_at
    }
  }
`;

export const GET_USER_LAST_ACTIVE = gql`
  query GetUserLastActiveProfile($get_user_input: get_user_input!) {
    get_user(get_user_input: $get_user_input) {
      uuid
      last_active
    }
  }
`;
