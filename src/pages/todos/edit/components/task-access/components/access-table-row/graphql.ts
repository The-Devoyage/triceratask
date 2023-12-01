import { gql } from "@apollo/client";

export const UPDATE_TODO_ACCESS = gql`
  mutation TaskAccessUpdateAccesss(
    $update_todo_accesss_input: update_todo_accesss_input!
  ) {
    update_todo_accesss(update_todo_accesss_input: $update_todo_accesss_input) {
      uuid
    }
  }
`;
