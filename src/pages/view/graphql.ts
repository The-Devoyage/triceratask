import { gql } from "@apollo/client";

export const GET_TODO_WITH_HISTORY = gql`
  query GetTodoWithHistory(
    $get_todo_input: get_todo_input!
    $get_todo_historys_input: get_todo_historys_input!
  ) {
    get_todo(get_todo_input: $get_todo_input) {
      uuid
      title
      description
      completed
      completed_at
      created_at
      history(history: $get_todo_historys_input) {
        uuid
        todo_uuid
        created_at
        property
        old_value
        new_value
      }
    }
  }
`;
