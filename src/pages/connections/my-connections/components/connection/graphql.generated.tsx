import * as Types from '../../../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateUserConnectionsMutationVariables = Types.Exact<{
  update_user_connections_input: Types.Update_User_Connections_Input;
}>;


export type UpdateUserConnectionsMutation = { __typename?: 'Mutation', update_user_connections: Array<{ __typename?: 'user_connection', uuid: string }> };

export type GetUserLastActiveQueryVariables = Types.Exact<{
  get_user_input: Types.Get_User_Input;
}>;


export type GetUserLastActiveQuery = { __typename?: 'Query', get_user: { __typename?: 'user', uuid: string, last_active?: string | null } };


export const UpdateUserConnectionsDocument = gql`
    mutation UpdateUserConnections($update_user_connections_input: update_user_connections_input!) {
  update_user_connections(
    update_user_connections_input: $update_user_connections_input
  ) {
    uuid
  }
}
    `;
export type UpdateUserConnectionsMutationFn = Apollo.MutationFunction<UpdateUserConnectionsMutation, UpdateUserConnectionsMutationVariables>;

/**
 * __useUpdateUserConnectionsMutation__
 *
 * To run a mutation, you first call `useUpdateUserConnectionsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserConnectionsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserConnectionsMutation, { data, loading, error }] = useUpdateUserConnectionsMutation({
 *   variables: {
 *      update_user_connections_input: // value for 'update_user_connections_input'
 *   },
 * });
 */
export function useUpdateUserConnectionsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserConnectionsMutation, UpdateUserConnectionsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateUserConnectionsMutation, UpdateUserConnectionsMutationVariables>(UpdateUserConnectionsDocument, options);
      }
export type UpdateUserConnectionsMutationHookResult = ReturnType<typeof useUpdateUserConnectionsMutation>;
export type UpdateUserConnectionsMutationResult = Apollo.MutationResult<UpdateUserConnectionsMutation>;
export type UpdateUserConnectionsMutationOptions = Apollo.BaseMutationOptions<UpdateUserConnectionsMutation, UpdateUserConnectionsMutationVariables>;
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