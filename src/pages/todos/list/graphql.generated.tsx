import * as Types from '../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type TodosListGetTodosQueryVariables = Types.Exact<{
  get_todos_input: Types.Get_Todos_Input;
  get_user_input: Types.Get_User_Input;
  get_todo_accesss_input: Types.Get_Todo_Accesss_Input;
}>;


export type TodosListGetTodosQuery = { __typename?: 'Query', get_todos: { __typename?: 'findmany_todo_response', data: Array<{ __typename?: 'todo', uuid: string, title: string, description: string, completed: boolean, created_at: string, updated_at: string, completed_at?: string | null, goal_date?: string | null, created_by: { __typename?: 'findone_user_response', data: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } }, access: { __typename?: 'findmany_todo_access_response', data: Array<{ __typename?: 'todo_access', uuid: string, user: { __typename?: 'findone_user_response', data: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } } }> } }>, meta?: { __typename?: 'meta', request_id: string, count: number, total_count: number, page: number, total_pages: number, service_name: string, executed_at: string, service_version?: string | null, user_uuid?: string | null } | null } };


export const TodosListGetTodosDocument = gql`
    query TodosListGetTodos($get_todos_input: get_todos_input!, $get_user_input: get_user_input!, $get_todo_accesss_input: get_todo_accesss_input!) {
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
          user(user: {query: {}}) {
            data {
              uuid
              identifier
              profile_img
            }
          }
        }
      }
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

/**
 * __useTodosListGetTodosQuery__
 *
 * To run a query within a React component, call `useTodosListGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosListGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosListGetTodosQuery({
 *   variables: {
 *      get_todos_input: // value for 'get_todos_input'
 *      get_user_input: // value for 'get_user_input'
 *      get_todo_accesss_input: // value for 'get_todo_accesss_input'
 *   },
 * });
 */
export function useTodosListGetTodosQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TodosListGetTodosQuery, TodosListGetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TodosListGetTodosQuery, TodosListGetTodosQueryVariables>(TodosListGetTodosDocument, options);
      }
export function useTodosListGetTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodosListGetTodosQuery, TodosListGetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TodosListGetTodosQuery, TodosListGetTodosQueryVariables>(TodosListGetTodosDocument, options);
        }
export type TodosListGetTodosQueryHookResult = ReturnType<typeof useTodosListGetTodosQuery>;
export type TodosListGetTodosLazyQueryHookResult = ReturnType<typeof useTodosListGetTodosLazyQuery>;
export type TodosListGetTodosQueryResult = Apollo.QueryResult<TodosListGetTodosQuery, TodosListGetTodosQueryVariables>;