import * as Types from '../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type GetUsersActiveQueryVariables = Types.Exact<{
  get_users_input: Types.Get_Users_Input;
}>;


export type GetUsersActiveQuery = { __typename?: 'Query', get_users: Array<{ __typename?: 'user', uuid: string, last_active?: string | null }> };


export const GetUsersActiveDocument = gql`
    query GetUsersActive($get_users_input: get_users_input!) {
  get_users(get_users_input: $get_users_input) {
    uuid
    last_active
  }
}
    `;

/**
 * __useGetUsersActiveQuery__
 *
 * To run a query within a React component, call `useGetUsersActiveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersActiveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersActiveQuery({
 *   variables: {
 *      get_users_input: // value for 'get_users_input'
 *   },
 * });
 */
export function useGetUsersActiveQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetUsersActiveQuery, GetUsersActiveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUsersActiveQuery, GetUsersActiveQueryVariables>(GetUsersActiveDocument, options);
      }
export function useGetUsersActiveLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersActiveQuery, GetUsersActiveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUsersActiveQuery, GetUsersActiveQueryVariables>(GetUsersActiveDocument, options);
        }
export type GetUsersActiveQueryHookResult = ReturnType<typeof useGetUsersActiveQuery>;
export type GetUsersActiveLazyQueryHookResult = ReturnType<typeof useGetUsersActiveLazyQuery>;
export type GetUsersActiveQueryResult = Apollo.QueryResult<GetUsersActiveQuery, GetUsersActiveQueryVariables>;