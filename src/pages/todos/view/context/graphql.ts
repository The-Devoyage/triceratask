import { gql } from "@apollo/client";

export const VIEW_GET_TODO = gql`
  query ViewGetTodo(
    $get_todo_input: get_todo_input!
    $get_todo_accesss_input: get_todo_accesss_input!
  ) {
    get_todo(get_todo_input: $get_todo_input) {
      data {
        uuid
        title
        description
        completed
        completed_at
        created_at
        goal_date
        is_encrypted
        deleted_at
        created_by(created_by: { query: {} }) {
          data {
            uuid
            identifier
            profile_img
          }
        }
        access(access: $get_todo_accesss_input) {
          data {
            uuid
            user(user: { query: {} }) {
              data {
                uuid
                identifier
                profile_img
              }
            }
            manage
            edit
          }
        }
      }
    }
  }
`;
