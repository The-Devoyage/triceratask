import { gql } from "@apollo/client";

export const VIEW_GET_TODO = gql`
  query ViewGetTodo(
    $get_todo_input: get_todo_input!
    $get_todo_historys_input: get_todo_historys_input!
    $get_todo_accesss_input: get_todo_accesss_input!
  ) {
    get_todo(get_todo_input: $get_todo_input) {
      uuid
      title
      description
      completed
      completed_at
      created_at
      goal_date
      history(history: $get_todo_historys_input) {
        uuid
        todo_uuid
        created_at
        property
        old_value
        new_value
      }
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
