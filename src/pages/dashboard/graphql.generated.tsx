import * as Types from '../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type DashboardGetTodoCountQueryVariables = Types.Exact<{
  get_todos_input: Types.Get_Todos_Input;
}>;


export type DashboardGetTodoCountQuery = { __typename?: 'Query', get_todos: { __typename?: 'findmany_todo_response', meta?: { __typename?: 'meta', total_count: number } | null } };


export const DashboardGetTodoCountDocument = gql`
    query DashboardGetTodoCount($get_todos_input: get_todos_input!) {
  get_todos(get_todos_input: $get_todos_input) {
    meta {
      total_count
    }
  }
}
    `;

/**
 * __useDashboardGetTodoCountQuery__
 *
 * To run a query within a React component, call `useDashboardGetTodoCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardGetTodoCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardGetTodoCountQuery({
 *   variables: {
 *      get_todos_input: // value for 'get_todos_input'
 *   },
 * });
 */
export function useDashboardGetTodoCountQuery(baseOptions: ApolloReactHooks.QueryHookOptions<DashboardGetTodoCountQuery, DashboardGetTodoCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<DashboardGetTodoCountQuery, DashboardGetTodoCountQueryVariables>(DashboardGetTodoCountDocument, options);
      }
export function useDashboardGetTodoCountLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DashboardGetTodoCountQuery, DashboardGetTodoCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<DashboardGetTodoCountQuery, DashboardGetTodoCountQueryVariables>(DashboardGetTodoCountDocument, options);
        }
export type DashboardGetTodoCountQueryHookResult = ReturnType<typeof useDashboardGetTodoCountQuery>;
export type DashboardGetTodoCountLazyQueryHookResult = ReturnType<typeof useDashboardGetTodoCountLazyQuery>;
export type DashboardGetTodoCountQueryResult = Apollo.QueryResult<DashboardGetTodoCountQuery, DashboardGetTodoCountQueryVariables>;