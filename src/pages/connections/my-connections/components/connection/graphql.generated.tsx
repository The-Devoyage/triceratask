import * as Types from '../../../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateUserConnectionsMutationVariables = Types.Exact<{
  update_user_connections_input: Types.Update_User_Connections_Input;
}>;


export type UpdateUserConnectionsMutation = { __typename?: 'Mutation', update_user_connections: { __typename?: 'updatemany_user_connection_response', data: Array<{ __typename?: 'user_connection', uuid: string }> } };


export const UpdateUserConnectionsDocument = gql`
    mutation UpdateUserConnections($update_user_connections_input: update_user_connections_input!) {
  update_user_connections(
    update_user_connections_input: $update_user_connections_input
  ) {
    data {
      uuid
    }
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