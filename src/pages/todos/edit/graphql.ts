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

export const GET_TODO = gql`
  query GetTodo($get_todo_input: get_todo_input!) {
    get_todo(get_todo_input: $get_todo_input) {
      uuid
      title
      description
      completed
      completed_at
      goal_date
    }
  }
`;
