import * as Types from '../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type GetTodoWithHistoryQueryVariables = Types.Exact<{
  get_todo_input: Types.Get_Todo_Input;
  get_todo_historys_input: Types.Get_Todo_Historys_Input;
}>;


export type GetTodoWithHistoryQuery = { __typename?: 'Query', get_todo: { __typename?: 'todo', uuid: string, title: string, description: string, completed: boolean, completed_at?: string | null, created_at: string, history: Array<{ __typename?: 'todo_history', uuid: string, todo_uuid: string, created_at: string, property: string, old_value?: string | null, new_value?: string | null }> } };


export const GetTodoWithHistoryDocument = gql`
    query GetTodoWithHistory($get_todo_input: get_todo_input!, $get_todo_historys_input: get_todo_historys_input!) {
  get_todo(get_todo_input: $get_todo_input) {
    uuid
    title
    description
    completed
    completed_at
    created_at
    history(history: $get_todo_historys_input) {
      uuid
      todo_uuid
      created_at
      property
      old_value
      new_value
    }
  }
}
    `;

/**
 * __useGetTodoWithHistoryQuery__
 *
 * To run a query within a React component, call `useGetTodoWithHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoWithHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoWithHistoryQuery({
 *   variables: {
 *      get_todo_input: // value for 'get_todo_input'
 *      get_todo_historys_input: // value for 'get_todo_historys_input'
 *   },
 * });
 */
export function useGetTodoWithHistoryQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTodoWithHistoryQuery, GetTodoWithHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTodoWithHistoryQuery, GetTodoWithHistoryQueryVariables>(GetTodoWithHistoryDocument, options);
      }
export function useGetTodoWithHistoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTodoWithHistoryQuery, GetTodoWithHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTodoWithHistoryQuery, GetTodoWithHistoryQueryVariables>(GetTodoWithHistoryDocument, options);
        }
export type GetTodoWithHistoryQueryHookResult = ReturnType<typeof useGetTodoWithHistoryQuery>;
export type GetTodoWithHistoryLazyQueryHookResult = ReturnType<typeof useGetTodoWithHistoryLazyQuery>;
export type GetTodoWithHistoryQueryResult = Apollo.QueryResult<GetTodoWithHistoryQuery, GetTodoWithHistoryQueryVariables>;