import * as Types from './types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateUserLastActiveMutationVariables = Types.Exact<{
  update_users_input: Types.Update_Users_Input;
}>;


export type UpdateUserLastActiveMutation = { __typename?: 'Mutation', update_users: Array<{ __typename?: 'user', uuid: string, last_active?: string | null }> };


export const UpdateUserLastActiveDocument = gql`
    mutation UpdateUserLastActive($update_users_input: update_users_input!) {
  update_users(update_users_input: $update_users_input) {
    uuid
    last_active
  }
}
    `;
export type UpdateUserLastActiveMutationFn = Apollo.MutationFunction<UpdateUserLastActiveMutation, UpdateUserLastActiveMutationVariables>;

/**
 * __useUpdateUserLastActiveMutation__
 *
 * To run a mutation, you first call `useUpdateUserLastActiveMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserLastActiveMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserLastActiveMutation, { data, loading, error }] = useUpdateUserLastActiveMutation({
 *   variables: {
 *      update_users_input: // value for 'update_users_input'
 *   },
 * });
 */
export function useUpdateUserLastActiveMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserLastActiveMutation, UpdateUserLastActiveMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateUserLastActiveMutation, UpdateUserLastActiveMutationVariables>(UpdateUserLastActiveDocument, options);
      }
export type UpdateUserLastActiveMutationHookResult = ReturnType<typeof useUpdateUserLastActiveMutation>;
export type UpdateUserLastActiveMutationResult = Apollo.MutationResult<UpdateUserLastActiveMutation>;
export type UpdateUserLastActiveMutationOptions = Apollo.BaseMutationOptions<UpdateUserLastActiveMutation, UpdateUserLastActiveMutationVariables>;