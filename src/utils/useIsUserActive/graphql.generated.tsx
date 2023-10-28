import * as Types from '../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type GetUserLastActiveQueryVariables = Types.Exact<{
  get_user_input: Types.Get_User_Input;
}>;


export type GetUserLastActiveQuery = { __typename?: 'Query', get_user: { __typename?: 'user', uuid: string, last_active?: string | null } };


export const GetUserLastActiveDocument = gql`
    query GetUserLastActive($get_user_input: get_user_input!) {
  get_user(get_user_input: $get_user_input) {
    uuid
    last_active
  }
}
    `;

/**
 * __useGetUserLastActiveQuery__
 *
 * To run a query within a React component, call `useGetUserLastActiveQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserLastActiveQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserLastActiveQuery({
 *   variables: {
 *      get_user_input: // value for 'get_user_input'
 *   },
 * });
 */
export function useGetUserLastActiveQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetUserLastActiveQuery, GetUserLastActiveQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUserLastActiveQuery, GetUserLastActiveQueryVariables>(GetUserLastActiveDocument, options);
      }
export function useGetUserLastActiveLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserLastActiveQuery, GetUserLastActiveQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUserLastActiveQuery, GetUserLastActiveQueryVariables>(GetUserLastActiveDocument, options);
        }
export type GetUserLastActiveQueryHookResult = ReturnType<typeof useGetUserLastActiveQuery>;
export type GetUserLastActiveLazyQueryHookResult = ReturnType<typeof useGetUserLastActiveLazyQuery>;
export type GetUserLastActiveQueryResult = Apollo.QueryResult<GetUserLastActiveQuery, GetUserLastActiveQueryVariables>;