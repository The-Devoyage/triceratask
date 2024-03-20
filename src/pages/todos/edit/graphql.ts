import { gql } from "@apollo/client";

export const UPDATE_TODOS = gql`
  mutation UpdateTodos($update_todos_input: update_todos_input!) {
    update_todos(update_todos_input: $update_todos_input) {
      data {
        uuid
        title
        description
        completed
        completed_at
        goal_date
      }
    }
  }
`;

export const EDIT_GET_TODO = gql`
  query EditGetTodo(
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
        goal_date
        is_encrypted
        deleted_at
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
            revoked
          }
        }
      }
    }
  }
`;
