import * as Types from '../../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type ViewGetTodoQueryVariables = Types.Exact<{
  get_todo_input: Types.Get_Todo_Input;
  get_todo_accesss_input: Types.Get_Todo_Accesss_Input;
}>;


export type ViewGetTodoQuery = { __typename?: 'Query', get_todo: { __typename?: 'findone_todo_response', data: { __typename?: 'todo', uuid: string, title: string, description: string, completed: boolean, completed_at?: string | null, created_at: string, goal_date?: string | null, is_encrypted?: boolean | null, deleted_at?: string | null, created_by: { __typename?: 'findone_user_response', data?: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } | null }, access: { __typename?: 'findmany_todo_access_response', data: Array<{ __typename?: 'todo_access', uuid: string, manage: boolean, edit: boolean, user: { __typename?: 'findone_user_response', data?: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } | null } }> } } } };


export const ViewGetTodoDocument = gql`
    query ViewGetTodo($get_todo_input: get_todo_input!, $get_todo_accesss_input: get_todo_accesss_input!) {
  get_todo(get_todo_input: $get_todo_input) {
    data {
      uuid
      title
      description
      completed
      completed_at
      created_at
      goal_date
      is_encrypted
      deleted_at
      created_by(created_by: {query: {}}) {
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
          manage
          edit
        }
      }
    }
  }
}
    `;

/**
 * __useViewGetTodoQuery__
 *
 * To run a query within a React component, call `useViewGetTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewGetTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewGetTodoQuery({
 *   variables: {
 *      get_todo_input: // value for 'get_todo_input'
 *      get_todo_accesss_input: // value for 'get_todo_accesss_input'
 *   },
 * });
 */
export function useViewGetTodoQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ViewGetTodoQuery, ViewGetTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ViewGetTodoQuery, ViewGetTodoQueryVariables>(ViewGetTodoDocument, options);
      }
export function useViewGetTodoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ViewGetTodoQuery, ViewGetTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ViewGetTodoQuery, ViewGetTodoQueryVariables>(ViewGetTodoDocument, options);
        }
export type ViewGetTodoQueryHookResult = ReturnType<typeof useViewGetTodoQuery>;
export type ViewGetTodoLazyQueryHookResult = ReturnType<typeof useViewGetTodoLazyQuery>;
export type ViewGetTodoQueryResult = Apollo.QueryResult<ViewGetTodoQuery, ViewGetTodoQueryVariables>;