import * as Types from '../../../../../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type TaskAccessSelectGetConnectionsQueryVariables = Types.Exact<{
  get_user_connections_input: Types.Get_User_Connections_Input;
  get_user_input: Types.Get_User_Input;
  get_connected_user_input: Types.Get_User_Input;
}>;


export type TaskAccessSelectGetConnectionsQuery = { __typename?: 'Query', get_user_connections: { __typename?: 'findmany_user_connection_response', data: Array<{ __typename?: 'user_connection', uuid: string, user: { __typename?: 'findone_user_response', data?: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } | null }, connected_user: { __typename?: 'findone_user_response', data?: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } | null } } | null> } };

export type TaskAccessCreateAccessMutationVariables = Types.Exact<{
  create_todo_access_input: Types.Create_Todo_Access_Input;
}>;


export type TaskAccessCreateAccessMutation = { __typename?: 'Mutation', create_todo_access: { __typename?: 'createone_todo_access_response', data: { __typename?: 'todo_access', uuid: string } } };


export const TaskAccessSelectGetConnectionsDocument = gql`
    query TaskAccessSelectGetConnections($get_user_connections_input: get_user_connections_input!, $get_user_input: get_user_input!, $get_connected_user_input: get_user_input!) {
  get_user_connections(get_user_connections_input: $get_user_connections_input) {
    data {
      uuid
      user(user: $get_user_input) {
        data {
          uuid
          identifier
          profile_img
        }
      }
      connected_user(connected_user: $get_connected_user_input) {
        data {
          uuid
          identifier
          profile_img
        }
      }
    }
  }
}
    `;

/**
 * __useTaskAccessSelectGetConnectionsQuery__
 *
 * To run a query within a React component, call `useTaskAccessSelectGetConnectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTaskAccessSelectGetConnectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTaskAccessSelectGetConnectionsQuery({
 *   variables: {
 *      get_user_connections_input: // value for 'get_user_connections_input'
 *      get_user_input: // value for 'get_user_input'
 *      get_connected_user_input: // value for 'get_connected_user_input'
 *   },
 * });
 */
export function useTaskAccessSelectGetConnectionsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TaskAccessSelectGetConnectionsQuery, TaskAccessSelectGetConnectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TaskAccessSelectGetConnectionsQuery, TaskAccessSelectGetConnectionsQueryVariables>(TaskAccessSelectGetConnectionsDocument, options);
      }
export function useTaskAccessSelectGetConnectionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TaskAccessSelectGetConnectionsQuery, TaskAccessSelectGetConnectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TaskAccessSelectGetConnectionsQuery, TaskAccessSelectGetConnectionsQueryVariables>(TaskAccessSelectGetConnectionsDocument, options);
        }
export type TaskAccessSelectGetConnectionsQueryHookResult = ReturnType<typeof useTaskAccessSelectGetConnectionsQuery>;
export type TaskAccessSelectGetConnectionsLazyQueryHookResult = ReturnType<typeof useTaskAccessSelectGetConnectionsLazyQuery>;
export type TaskAccessSelectGetConnectionsQueryResult = Apollo.QueryResult<TaskAccessSelectGetConnectionsQuery, TaskAccessSelectGetConnectionsQueryVariables>;
export const TaskAccessCreateAccessDocument = gql`
    mutation TaskAccessCreateAccess($create_todo_access_input: create_todo_access_input!) {
  create_todo_access(create_todo_access_input: $create_todo_access_input) {
    data {
      uuid
    }
  }
}
    `;
export type TaskAccessCreateAccessMutationFn = Apollo.MutationFunction<TaskAccessCreateAccessMutation, TaskAccessCreateAccessMutationVariables>;

/**
 * __useTaskAccessCreateAccessMutation__
 *
 * To run a mutation, you first call `useTaskAccessCreateAccessMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskAccessCreateAccessMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskAccessCreateAccessMutation, { data, loading, error }] = useTaskAccessCreateAccessMutation({
 *   variables: {
 *      create_todo_access_input: // value for 'create_todo_access_input'
 *   },
 * });
 */
export function useTaskAccessCreateAccessMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskAccessCreateAccessMutation, TaskAccessCreateAccessMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TaskAccessCreateAccessMutation, TaskAccessCreateAccessMutationVariables>(TaskAccessCreateAccessDocument, options);
      }
export type TaskAccessCreateAccessMutationHookResult = ReturnType<typeof useTaskAccessCreateAccessMutation>;
export type TaskAccessCreateAccessMutationResult = Apollo.MutationResult<TaskAccessCreateAccessMutation>;
export type TaskAccessCreateAccessMutationOptions = Apollo.BaseMutationOptions<TaskAccessCreateAccessMutation, TaskAccessCreateAccessMutationVariables>;