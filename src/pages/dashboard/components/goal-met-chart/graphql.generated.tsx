import * as Types from '../../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type GoalMetChartGetTodosCountQueryVariables = Types.Exact<{
  get_todos_input: Types.Get_Todos_Input;
}>;


export type GoalMetChartGetTodosCountQuery = { __typename?: 'Query', get_todos: { __typename?: 'findmany_todo_response', meta?: { __typename?: 'meta', total_count: number } | null } };


export const GoalMetChartGetTodosCountDocument = gql`
    query GoalMetChartGetTodosCount($get_todos_input: get_todos_input!) {
  get_todos(get_todos_input: $get_todos_input) {
    meta {
      total_count
    }
  }
}
    `;

/**
 * __useGoalMetChartGetTodosCountQuery__
 *
 * To run a query within a React component, call `useGoalMetChartGetTodosCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoalMetChartGetTodosCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoalMetChartGetTodosCountQuery({
 *   variables: {
 *      get_todos_input: // value for 'get_todos_input'
 *   },
 * });
 */
export function useGoalMetChartGetTodosCountQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GoalMetChartGetTodosCountQuery, GoalMetChartGetTodosCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GoalMetChartGetTodosCountQuery, GoalMetChartGetTodosCountQueryVariables>(GoalMetChartGetTodosCountDocument, options);
      }
export function useGoalMetChartGetTodosCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GoalMetChartGetTodosCountQuery, GoalMetChartGetTodosCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GoalMetChartGetTodosCountQuery, GoalMetChartGetTodosCountQueryVariables>(GoalMetChartGetTodosCountDocument, options);
        }
export type GoalMetChartGetTodosCountQueryHookResult = ReturnType<typeof useGoalMetChartGetTodosCountQuery>;
export type GoalMetChartGetTodosCountLazyQueryHookResult = ReturnType<typeof useGoalMetChartGetTodosCountLazyQuery>;
export type GoalMetChartGetTodosCountQueryResult = Apollo.QueryResult<GoalMetChartGetTodosCountQuery, GoalMetChartGetTodosCountQueryVariables>;