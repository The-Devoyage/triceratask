import { gql } from "@apollo/client";

// export const GET_ALL_TODOS = gql`
//   query GetAllTodos(
//     $get_todos_input: get_todos_input!
//     $get_user_input: get_user_input!
//   ) {
//     get_todos(get_todos_input: $get_todos_input) {
//       uuid
//       title
//       completed
//       goal_date
//       created_at
//       created_by(created_by: $get_user_input) {
//         uuid
//         identifier
//       }
//     }
//   }
// `;

export const GET_USERS = gql`
  query GetUsers($get_users_input: get_users_input!) {
    get_users(get_users_input: $get_users_input) {
      uuid
      identifier
    }
  }
`;
