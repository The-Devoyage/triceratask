import { gql } from "@apollo/client";

export const TODO_TIMELINE_GET_HISTORIES = gql`
  query TodoTimelineGetHistories(
    $get_todo_historys_input: get_todo_historys_input!
  ) {
    get_todo_historys(get_todo_historys_input: $get_todo_historys_input) {
      data {
        uuid
        created_at
        property
        old_value
        new_value
        created_by(created_by: { query: {} }) {
          data {
            uuid
            identifier
            profile_img
          }
        }
      }
      meta {
        total_count
        total_pages
      }
    }
  }
`;
