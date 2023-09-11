import * as Types from '../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type RegisterStartMutationVariables = Types.Exact<{
  identifier: Types.Scalars['String']['input'];
}>;


export type RegisterStartMutation = { __typename?: 'Mutation', register_start: string };

export type RegisterFinishMutationVariables = Types.Exact<{
  identifier: Types.Scalars['String']['input'];
  public_key: Types.Scalars['String']['input'];
}>;


export type RegisterFinishMutation = { __typename?: 'Mutation', register_finish: boolean };


export const RegisterStartDocument = gql`
    mutation RegisterStart($identifier: String!) {
  register_start(identifier: $identifier)
}
    `;
export type RegisterStartMutationFn = Apollo.MutationFunction<RegisterStartMutation, RegisterStartMutationVariables>;

/**
 * __useRegisterStartMutation__
 *
 * To run a mutation, you first call `useRegisterStartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterStartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerStartMutation, { data, loading, error }] = useRegisterStartMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export function useRegisterStartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterStartMutation, RegisterStartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterStartMutation, RegisterStartMutationVariables>(RegisterStartDocument, options);
      }
export type RegisterStartMutationHookResult = ReturnType<typeof useRegisterStartMutation>;
export type RegisterStartMutationResult = Apollo.MutationResult<RegisterStartMutation>;
export type RegisterStartMutationOptions = Apollo.BaseMutationOptions<RegisterStartMutation, RegisterStartMutationVariables>;
export const RegisterFinishDocument = gql`
    mutation RegisterFinish($identifier: String!, $public_key: String!) {
  register_finish(identifier: $identifier, public_key: $public_key)
}
    `;
export type RegisterFinishMutationFn = Apollo.MutationFunction<RegisterFinishMutation, RegisterFinishMutationVariables>;

/**
 * __useRegisterFinishMutation__
 *
 * To run a mutation, you first call `useRegisterFinishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterFinishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerFinishMutation, { data, loading, error }] = useRegisterFinishMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      public_key: // value for 'public_key'
 *   },
 * });
 */
export function useRegisterFinishMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterFinishMutation, RegisterFinishMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterFinishMutation, RegisterFinishMutationVariables>(RegisterFinishDocument, options);
      }
export type RegisterFinishMutationHookResult = ReturnType<typeof useRegisterFinishMutation>;
export type RegisterFinishMutationResult = Apollo.MutationResult<RegisterFinishMutation>;
export type RegisterFinishMutationOptions = Apollo.BaseMutationOptions<RegisterFinishMutation, RegisterFinishMutationVariables>;