import { gql } from "@apollo/client";

export const GET_TODOS = gql`
  query TodosListGetTodos(
    $get_todos_input: get_todos_input!
    $get_todo_accesss_input: get_todo_accesss_input!
  ) {
    get_todos(get_todos_input: $get_todos_input) {
      data {
        uuid
        title
        description
        completed
        completed_at
        goal_date
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
        created_at
        updated_at
      }
      meta {
        request_id
        count
        total_count
        page
        total_pages
        service_name
        executed_at
        service_version
        user_uuid
      }
    }
  }
`;

export const TODO_LIST_BULK_UPDATE = gql`
  mutation TodoListBulkUpdate($update_todos_input: update_todos_input!) {
    update_todos(update_todos_input: $update_todos_input) {
      data {
        uuid
        completed
      }
    }
  }
`;
