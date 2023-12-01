import { gql } from "@apollo/client";

export const UPDATE_TODOS = gql`
  mutation UpdateTodos($update_todos_input: update_todos_input!) {
    update_todos(update_todos_input: $update_todos_input) {
      uuid
      title
      description
      completed
      completed_at
      goal_date
    }
  }
`;

export const EDIT_GET_TODO = gql`
  query EditGetTodo(
    $get_todo_input: get_todo_input!
    $get_todo_accesss_input: get_todo_accesss_input!
  ) {
    get_todo(get_todo_input: $get_todo_input) {
      uuid
      title
      description
      completed
      completed_at
      goal_date
      access(access: $get_todo_accesss_input) {
        uuid
        user_uuid(user_uuid: { query: {} }) {
          uuid
          identifier
          profile_img
        }
        view
        edit
      }
    }
  }
`;
