import { gql } from "@apollo/client";

export const GOAL_MET_CHART_GET_TODOS_COUNT = gql`
  query GoalMetChartGetTodosCount($get_todos_input: get_todos_input!) {
    get_todos(get_todos_input: $get_todos_input) {
      data {
        uuid
        completed_at
        goal_date
        deleted_at
      }
      meta {
        total_count
      }
    }
  }
`;
