import { gql } from "@apollo/client";

export const UPDATE_USERS = gql`
  mutation UpdateUserProfile($update_users_input: update_users_input!) {
    update_users(update_users_input: $update_users_input) {
      data {
        uuid
        identifier
        profile_img
        created_at
        share_active
        email
        phone
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUserProfile($get_user_input: get_user_input!) {
    get_user(get_user_input: $get_user_input) {
      data {
        uuid
        identifier
        profile_img
        created_at
        share_active
        status
        email
        phone
      }
    }
  }
`;
