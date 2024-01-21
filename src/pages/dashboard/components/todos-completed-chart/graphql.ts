import { gql } from "@apollo/client";

export const TODO_COMPLETED_CHART_GET_TODOS = gql`
  query TodoCompletedChartGetTodos($get_todos_input: get_todos_input!) {
    get_todos(get_todos_input: $get_todos_input) {
      data {
        uuid
        completed
        updated_at
        completed_at
        goal_date
      }
    }
  }
`;
