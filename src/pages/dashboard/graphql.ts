import { gql } from "@apollo/client";

export const DASHBOARD_GET_TODO_COUNT = gql`
  query DashboardGetTodoCount($get_todos_input: get_todos_input!) {
    get_todos(get_todos_input: $get_todos_input) {
      meta {
        total_count
      }
    }
  }
`;
