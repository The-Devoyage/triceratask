import * as Types from '../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateUsersMutationVariables = Types.Exact<{
  update_users_input: Types.Update_Users_Input;
}>;


export type UpdateUsersMutation = { __typename?: 'Mutation', update_users: Array<{ __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null, created_at: string }> };


export const UpdateUsersDocument = gql`
    mutation UpdateUsers($update_users_input: update_users_input!) {
  update_users(update_users_input: $update_users_input) {
    uuid
    identifier
    profile_img
    created_at
  }
}
    `;
export type UpdateUsersMutationFn = Apollo.MutationFunction<UpdateUsersMutation, UpdateUsersMutationVariables>;

/**
 * __useUpdateUsersMutation__
 *
 * To run a mutation, you first call `useUpdateUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsersMutation, { data, loading, error }] = useUpdateUsersMutation({
 *   variables: {
 *      update_users_input: // value for 'update_users_input'
 *   },
 * });
 */
export function useUpdateUsersMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUsersMutation, UpdateUsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateUsersMutation, UpdateUsersMutationVariables>(UpdateUsersDocument, options);
      }
export type UpdateUsersMutationHookResult = ReturnType<typeof useUpdateUsersMutation>;
export type UpdateUsersMutationResult = Apollo.MutationResult<UpdateUsersMutation>;
export type UpdateUsersMutationOptions = Apollo.BaseMutationOptions<UpdateUsersMutation, UpdateUsersMutationVariables>;