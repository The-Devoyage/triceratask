import * as Types from '../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type NewConnectionsSidebarQueryVariables = Types.Exact<{
  get_user_connections_input: Types.Get_User_Connections_Input;
}>;


export type NewConnectionsSidebarQuery = { __typename?: 'Query', get_user_connections: { __typename?: 'findmany_user_connection_response', data: Array<{ __typename?: 'user_connection', uuid: string } | null> } };


export const NewConnectionsSidebarDocument = gql`
    query NewConnectionsSidebar($get_user_connections_input: get_user_connections_input!) {
  get_user_connections(get_user_connections_input: $get_user_connections_input) {
    data {
      uuid
    }
  }
}
    `;

/**
 * __useNewConnectionsSidebarQuery__
 *
 * To run a query within a React component, call `useNewConnectionsSidebarQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewConnectionsSidebarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewConnectionsSidebarQuery({
 *   variables: {
 *      get_user_connections_input: // value for 'get_user_connections_input'
 *   },
 * });
 */
export function useNewConnectionsSidebarQuery(baseOptions: ApolloReactHooks.QueryHookOptions<NewConnectionsSidebarQuery, NewConnectionsSidebarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<NewConnectionsSidebarQuery, NewConnectionsSidebarQueryVariables>(NewConnectionsSidebarDocument, options);
      }
export function useNewConnectionsSidebarLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NewConnectionsSidebarQuery, NewConnectionsSidebarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<NewConnectionsSidebarQuery, NewConnectionsSidebarQueryVariables>(NewConnectionsSidebarDocument, options);
        }
export type NewConnectionsSidebarQueryHookResult = ReturnType<typeof useNewConnectionsSidebarQuery>;
export type NewConnectionsSidebarLazyQueryHookResult = ReturnType<typeof useNewConnectionsSidebarLazyQuery>;
export type NewConnectionsSidebarQueryResult = Apollo.QueryResult<NewConnectionsSidebarQuery, NewConnectionsSidebarQueryVariables>;