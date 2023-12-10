import * as Types from '../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type DashboardGetTodosQueryVariables = Types.Exact<{
  get_todos_input: Types.Get_Todos_Input;
  get_user_input: Types.Get_User_Input;
}>;


export type DashboardGetTodosQuery = { __typename?: 'Query', get_todos: Array<{ __typename?: 'todo', uuid: string, title: string, description: string, completed: boolean, created_at: string, updated_at: string, completed_at?: string | null, goal_date?: string | null, created_by?: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } | null }> };


export const DashboardGetTodosDocument = gql`
    query DashboardGetTodos($get_todos_input: get_todos_input!, $get_user_input: get_user_input!) {
  get_todos(get_todos_input: $get_todos_input) {
    uuid
    title
    description
    completed
    created_at
    updated_at
    completed_at
    goal_date
    created_by(created_by: $get_user_input) {
      uuid
      identifier
      profile_img
    }
  }
}
    `;

/**
 * __useDashboardGetTodosQuery__
 *
 * To run a query within a React component, call `useDashboardGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardGetTodosQuery({
 *   variables: {
 *      get_todos_input: // value for 'get_todos_input'
 *      get_user_input: // value for 'get_user_input'
 *   },
 * });
 */
export function useDashboardGetTodosQuery(baseOptions: ApolloReactHooks.QueryHookOptions<DashboardGetTodosQuery, DashboardGetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<DashboardGetTodosQuery, DashboardGetTodosQueryVariables>(DashboardGetTodosDocument, options);
      }
export function useDashboardGetTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<DashboardGetTodosQuery, DashboardGetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<DashboardGetTodosQuery, DashboardGetTodosQueryVariables>(DashboardGetTodosDocument, options);
        }
export type DashboardGetTodosQueryHookResult = ReturnType<typeof useDashboardGetTodosQuery>;
export type DashboardGetTodosLazyQueryHookResult = ReturnType<typeof useDashboardGetTodosLazyQuery>;
export type DashboardGetTodosQueryResult = Apollo.QueryResult<DashboardGetTodosQuery, DashboardGetTodosQueryVariables>;