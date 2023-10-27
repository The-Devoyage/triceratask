import * as Types from '../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type GetTodosQueryVariables = Types.Exact<{
  get_todos_input: Types.Get_Todos_Input;
  get_user_input: Types.Get_User_Input;
}>;


export type GetTodosQuery = { __typename?: 'Query', get_todos: Array<{ __typename?: 'todo', uuid: string, title: string, description: string, completed: boolean, created_at: string, updated_at: string, completed_at?: string | null, goal_date?: string | null, created_by: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } }> };


export const GetTodosDocument = gql`
    query GetTodos($get_todos_input: get_todos_input!, $get_user_input: get_user_input!) {
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
 * __useGetTodosQuery__
 *
 * To run a query within a React component, call `useGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodosQuery({
 *   variables: {
 *      get_todos_input: // value for 'get_todos_input'
 *      get_user_input: // value for 'get_user_input'
 *   },
 * });
 */
export function useGetTodosQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
      }
export function useGetTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTodosQuery, GetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTodosQuery, GetTodosQueryVariables>(GetTodosDocument, options);
        }
export type GetTodosQueryHookResult = ReturnType<typeof useGetTodosQuery>;
export type GetTodosLazyQueryHookResult = ReturnType<typeof useGetTodosLazyQuery>;
export type GetTodosQueryResult = Apollo.QueryResult<GetTodosQuery, GetTodosQueryVariables>;