import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query DashboardGetTodos(
    $get_todos_input: get_todos_input!
    $get_user_input: get_user_input!
  ) {
    get_todos(get_todos_input: $get_todos_input) {
      data {
        uuid
        title
        description
        completed
        created_at
        updated_at
        completed_at
        goal_date
        created_by(created_by: $get_user_input) {
          data {
            uuid
            identifier
            profile_img
          }
        }
      }
    }
  }
`;
