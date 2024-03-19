import { gql } from "@apollo/client";

export const UPCOMING_GOALS = gql`
  query UpcomingTasksByGoal($get_todos_input: get_todos_input!) {
    get_todos(get_todos_input: $get_todos_input) {
      data {
        uuid
        title
        goal_date
        completed
      }
      meta {
        total_count
      }
    }
  }
`;
