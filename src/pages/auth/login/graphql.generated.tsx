import * as Types from '../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type AuthenticateStartMutationVariables = Types.Exact<{
  identifier: Types.Scalars['String']['input'];
}>;


export type AuthenticateStartMutation = { __typename?: 'Mutation', authenticate_start: string };

export type AuthenticateFinishMutationVariables = Types.Exact<{
  identifier: Types.Scalars['String']['input'];
  public_key: Types.Scalars['String']['input'];
}>;


export type AuthenticateFinishMutation = { __typename?: 'Mutation', authenticate_finish: { __typename?: 'authenticate_success', token: string, user_uuid: string } };


export const AuthenticateStartDocument = gql`
    mutation AuthenticateStart($identifier: String!) {
  authenticate_start(identifier: $identifier)
}
    `;
export type AuthenticateStartMutationFn = Apollo.MutationFunction<AuthenticateStartMutation, AuthenticateStartMutationVariables>;

/**
 * __useAuthenticateStartMutation__
 *
 * To run a mutation, you first call `useAuthenticateStartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateStartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateStartMutation, { data, loading, error }] = useAuthenticateStartMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *   },
 * });
 */
export function useAuthenticateStartMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AuthenticateStartMutation, AuthenticateStartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<AuthenticateStartMutation, AuthenticateStartMutationVariables>(AuthenticateStartDocument, options);
      }
export type AuthenticateStartMutationHookResult = ReturnType<typeof useAuthenticateStartMutation>;
export type AuthenticateStartMutationResult = Apollo.MutationResult<AuthenticateStartMutation>;
export type AuthenticateStartMutationOptions = Apollo.BaseMutationOptions<AuthenticateStartMutation, AuthenticateStartMutationVariables>;
export const AuthenticateFinishDocument = gql`
    mutation AuthenticateFinish($identifier: String!, $public_key: String!) {
  authenticate_finish(identifier: $identifier, public_key: $public_key) {
    token
    user_uuid
  }
}
    `;
export type AuthenticateFinishMutationFn = Apollo.MutationFunction<AuthenticateFinishMutation, AuthenticateFinishMutationVariables>;

/**
 * __useAuthenticateFinishMutation__
 *
 * To run a mutation, you first call `useAuthenticateFinishMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateFinishMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateFinishMutation, { data, loading, error }] = useAuthenticateFinishMutation({
 *   variables: {
 *      identifier: // value for 'identifier'
 *      public_key: // value for 'public_key'
 *   },
 * });
 */
export function useAuthenticateFinishMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AuthenticateFinishMutation, AuthenticateFinishMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<AuthenticateFinishMutation, AuthenticateFinishMutationVariables>(AuthenticateFinishDocument, options);
      }
export type AuthenticateFinishMutationHookResult = ReturnType<typeof useAuthenticateFinishMutation>;
export type AuthenticateFinishMutationResult = Apollo.MutationResult<AuthenticateFinishMutation>;
export type AuthenticateFinishMutationOptions = Apollo.BaseMutationOptions<AuthenticateFinishMutation, AuthenticateFinishMutationVariables>;