import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query TodosListGetTodos(
    $get_todos_input: get_todos_input!
    $get_user_input: get_user_input!
    $get_todo_accesss_input: get_todo_accesss_input!
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
        access(access: $get_todo_accesss_input) {
          data {
            uuid
            user(user: { query: {} }) {
              data {
                uuid
                identifier
                profile_img
              }
            }
          }
        }
      }
    }
  }
`;

export const LIST_TODOS_GET_TODOS_BY_ACCESS = gql`
  query TodosListGetTodosByAccess(
    $get_todo_accesss_input: get_todo_accesss_input!
  ) {
    get_todo_accesss(get_todo_accesss_input: $get_todo_accesss_input) {
      data {
        uuid
        todo(todo: { query: {} }) {
          data {
            uuid
            title
            description
            completed
            created_at
            updated_at
            completed_at
            goal_date
            created_by(created_by: { query: {} }) {
              data {
                uuid
                identifier
                profile_img
              }
            }
            access(access: { query: {} }) {
              data {
                uuid
                user(user: { query: {} }) {
                  data {
                    uuid
                    identifier
                    profile_img
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
