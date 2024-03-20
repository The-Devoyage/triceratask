import * as Types from '../../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type UpcomingTasksByGoalQueryVariables = Types.Exact<{
  get_todos_input: Types.Get_Todos_Input;
}>;


export type UpcomingTasksByGoalQuery = { __typename?: 'Query', get_todos: { __typename?: 'findmany_todo_response', data: Array<{ __typename?: 'todo', uuid: string, title: string, goal_date?: string | null, completed: boolean, deleted_at?: string | null }>, meta?: { __typename?: 'meta', total_count: number } | null } };


export const UpcomingTasksByGoalDocument = gql`
    query UpcomingTasksByGoal($get_todos_input: get_todos_input!) {
  get_todos(get_todos_input: $get_todos_input) {
    data {
      uuid
      title
      goal_date
      completed
      deleted_at
    }
    meta {
      total_count
    }
  }
}
    `;

/**
 * __useUpcomingTasksByGoalQuery__
 *
 * To run a query within a React component, call `useUpcomingTasksByGoalQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpcomingTasksByGoalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpcomingTasksByGoalQuery({
 *   variables: {
 *      get_todos_input: // value for 'get_todos_input'
 *   },
 * });
 */
export function useUpcomingTasksByGoalQuery(baseOptions: ApolloReactHooks.QueryHookOptions<UpcomingTasksByGoalQuery, UpcomingTasksByGoalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UpcomingTasksByGoalQuery, UpcomingTasksByGoalQueryVariables>(UpcomingTasksByGoalDocument, options);
      }
export function useUpcomingTasksByGoalLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UpcomingTasksByGoalQuery, UpcomingTasksByGoalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UpcomingTasksByGoalQuery, UpcomingTasksByGoalQueryVariables>(UpcomingTasksByGoalDocument, options);
        }
export type UpcomingTasksByGoalQueryHookResult = ReturnType<typeof useUpcomingTasksByGoalQuery>;
export type UpcomingTasksByGoalLazyQueryHookResult = ReturnType<typeof useUpcomingTasksByGoalLazyQuery>;
export type UpcomingTasksByGoalQueryResult = Apollo.QueryResult<UpcomingTasksByGoalQuery, UpcomingTasksByGoalQueryVariables>;