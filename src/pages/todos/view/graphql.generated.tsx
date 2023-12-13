import * as Types from '../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type ViewGetTodoQueryVariables = Types.Exact<{
  get_todo_input: Types.Get_Todo_Input;
  get_todo_historys_input: Types.Get_Todo_Historys_Input;
  get_todo_accesss_input: Types.Get_Todo_Accesss_Input;
}>;


export type ViewGetTodoQuery = { __typename?: 'Query', get_todo: { __typename?: 'todo', uuid: string, title: string, description: string, completed: boolean, completed_at?: string | null, created_at: string, goal_date?: string | null, is_encrypted?: boolean | null, history: Array<{ __typename?: 'todo_history', uuid: string, todo: number, created_at: string, property: string, old_value?: string | null, new_value?: string | null, created_by: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } } | null>, access: Array<{ __typename?: 'todo_access', uuid: string, manage: boolean, edit: boolean, user: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } }> } };


export const ViewGetTodoDocument = gql`
    query ViewGetTodo($get_todo_input: get_todo_input!, $get_todo_historys_input: get_todo_historys_input!, $get_todo_accesss_input: get_todo_accesss_input!) {
  get_todo(get_todo_input: $get_todo_input) {
    uuid
    title
    description
    completed
    completed_at
    created_at
    goal_date
    is_encrypted
    history(history: $get_todo_historys_input) {
      uuid
      todo
      created_at
      property
      old_value
      new_value
      created_by(created_by: {query: {}}) {
        uuid
        identifier
        profile_img
      }
    }
    access(access: $get_todo_accesss_input) {
      uuid
      user(user: {query: {}}) {
        uuid
        identifier
        profile_img
      }
      manage
      edit
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
 *      get_todo_historys_input: // value for 'get_todo_historys_input'
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