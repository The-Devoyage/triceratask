import * as Types from '../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateUserProfileMutationVariables = Types.Exact<{
  update_users_input: Types.Update_Users_Input;
}>;


export type UpdateUserProfileMutation = { __typename?: 'Mutation', update_users: Array<{ __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null, created_at: string }> };

export type GetUserLastActiveProfileQueryVariables = Types.Exact<{
  get_user_input: Types.Get_User_Input;
}>;


export type GetUserLastActiveProfileQuery = { __typename?: 'Query', get_user: { __typename?: 'user', uuid: string, last_active?: string | null } };


export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($update_users_input: update_users_input!) {
  update_users(update_users_input: $update_users_input) {
    uuid
    identifier
    profile_img
    created_at
  }
}
    `;
export type UpdateUserProfileMutationFn = Apollo.MutationFunction<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;

/**
 * __useUpdateUserProfileMutation__
 *
 * To run a mutation, you first call `useUpdateUserProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserProfileMutation, { data, loading, error }] = useUpdateUserProfileMutation({
 *   variables: {
 *      update_users_input: // value for 'update_users_input'
 *   },
 * });
 */
export function useUpdateUserProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>(UpdateUserProfileDocument, options);
      }
export type UpdateUserProfileMutationHookResult = ReturnType<typeof useUpdateUserProfileMutation>;
export type UpdateUserProfileMutationResult = Apollo.MutationResult<UpdateUserProfileMutation>;
export type UpdateUserProfileMutationOptions = Apollo.BaseMutationOptions<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const GetUserLastActiveProfileDocument = gql`
    query GetUserLastActiveProfile($get_user_input: get_user_input!) {
  get_user(get_user_input: $get_user_input) {
    uuid
    last_active
  }
}
    `;

/**
 * __useGetUserLastActiveProfileQuery__
 *
 * To run a query within a React component, call `useGetUserLastActiveProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserLastActiveProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserLastActiveProfileQuery({
 *   variables: {
 *      get_user_input: // value for 'get_user_input'
 *   },
 * });
 */
export function useGetUserLastActiveProfileQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetUserLastActiveProfileQuery, GetUserLastActiveProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUserLastActiveProfileQuery, GetUserLastActiveProfileQueryVariables>(GetUserLastActiveProfileDocument, options);
      }
export function useGetUserLastActiveProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserLastActiveProfileQuery, GetUserLastActiveProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUserLastActiveProfileQuery, GetUserLastActiveProfileQueryVariables>(GetUserLastActiveProfileDocument, options);
        }
export type GetUserLastActiveProfileQueryHookResult = ReturnType<typeof useGetUserLastActiveProfileQuery>;
export type GetUserLastActiveProfileLazyQueryHookResult = ReturnType<typeof useGetUserLastActiveProfileLazyQuery>;
export type GetUserLastActiveProfileQueryResult = Apollo.QueryResult<GetUserLastActiveProfileQuery, GetUserLastActiveProfileQueryVariables>;