import * as Types from '../../../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type TodoTimelineGetHistoriesQueryVariables = Types.Exact<{
  get_todo_historys_input: Types.Get_Todo_Historys_Input;
}>;


export type TodoTimelineGetHistoriesQuery = { __typename?: 'Query', get_todo_historys: { __typename?: 'findmany_todo_history_response', data: Array<{ __typename?: 'todo_history', uuid: string, created_at: string, property: string, old_value?: string | null, new_value?: string | null, created_by: { __typename?: 'findone_user_response', data: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } } }>, meta?: { __typename?: 'meta', total_count: number, total_pages: number } | null } };


export const TodoTimelineGetHistoriesDocument = gql`
    query TodoTimelineGetHistories($get_todo_historys_input: get_todo_historys_input!) {
  get_todo_historys(get_todo_historys_input: $get_todo_historys_input) {
    data {
      uuid
      created_at
      property
      old_value
      new_value
      created_by(created_by: {query: {}}) {
        data {
          uuid
          identifier
          profile_img
        }
      }
    }
    meta {
      total_count
      total_pages
    }
  }
}
    `;

/**
 * __useTodoTimelineGetHistoriesQuery__
 *
 * To run a query within a React component, call `useTodoTimelineGetHistoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoTimelineGetHistoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoTimelineGetHistoriesQuery({
 *   variables: {
 *      get_todo_historys_input: // value for 'get_todo_historys_input'
 *   },
 * });
 */
export function useTodoTimelineGetHistoriesQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TodoTimelineGetHistoriesQuery, TodoTimelineGetHistoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TodoTimelineGetHistoriesQuery, TodoTimelineGetHistoriesQueryVariables>(TodoTimelineGetHistoriesDocument, options);
      }
export function useTodoTimelineGetHistoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodoTimelineGetHistoriesQuery, TodoTimelineGetHistoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TodoTimelineGetHistoriesQuery, TodoTimelineGetHistoriesQueryVariables>(TodoTimelineGetHistoriesDocument, options);
        }
export type TodoTimelineGetHistoriesQueryHookResult = ReturnType<typeof useTodoTimelineGetHistoriesQuery>;
export type TodoTimelineGetHistoriesLazyQueryHookResult = ReturnType<typeof useTodoTimelineGetHistoriesLazyQuery>;
export type TodoTimelineGetHistoriesQueryResult = Apollo.QueryResult<TodoTimelineGetHistoriesQuery, TodoTimelineGetHistoriesQueryVariables>;