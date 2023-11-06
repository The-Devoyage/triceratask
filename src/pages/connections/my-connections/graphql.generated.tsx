import * as Types from '../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type ListConnectionsQueryVariables = Types.Exact<{
  get_user_connections_input: Types.Get_User_Connections_Input;
  get_user_input: Types.Get_User_Input;
  get_connected_user_input: Types.Get_User_Input;
}>;


export type ListConnectionsQuery = { __typename?: 'Query', get_user_connections: Array<{ __typename?: 'user_connection', uuid: string, identifier: string, revoked: boolean, revoked_at?: string | null, status: boolean, accepted: boolean, accepted_at?: string | null, user_uuid: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null }, connected_user_uuid?: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null, last_active?: string | null } | null }> };


export const ListConnectionsDocument = gql`
    query ListConnections($get_user_connections_input: get_user_connections_input!, $get_user_input: get_user_input!, $get_connected_user_input: get_user_input!) {
  get_user_connections(get_user_connections_input: $get_user_connections_input) {
    uuid
    identifier
    revoked
    revoked_at
    status
    accepted
    accepted_at
    user_uuid(user_uuid: $get_user_input) {
      uuid
      identifier
      profile_img
    }
    connected_user_uuid(connected_user_uuid: $get_connected_user_input) {
      uuid
      identifier
      profile_img
      last_active
    }
  }
}
    `;

/**
 * __useListConnectionsQuery__
 *
 * To run a query within a React component, call `useListConnectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListConnectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListConnectionsQuery({
 *   variables: {
 *      get_user_connections_input: // value for 'get_user_connections_input'
 *      get_user_input: // value for 'get_user_input'
 *      get_connected_user_input: // value for 'get_connected_user_input'
 *   },
 * });
 */
export function useListConnectionsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<ListConnectionsQuery, ListConnectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<ListConnectionsQuery, ListConnectionsQueryVariables>(ListConnectionsDocument, options);
      }
export function useListConnectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ListConnectionsQuery, ListConnectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<ListConnectionsQuery, ListConnectionsQueryVariables>(ListConnectionsDocument, options);
        }
export type ListConnectionsQueryHookResult = ReturnType<typeof useListConnectionsQuery>;
export type ListConnectionsLazyQueryHookResult = ReturnType<typeof useListConnectionsLazyQuery>;
export type ListConnectionsQueryResult = Apollo.QueryResult<ListConnectionsQuery, ListConnectionsQueryVariables>;