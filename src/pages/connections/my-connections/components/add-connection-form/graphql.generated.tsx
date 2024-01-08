import * as Types from '../../../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type CreateConnectionMutationVariables = Types.Exact<{
  create_user_connection_input: Types.Create_User_Connection_Input;
}>;


export type CreateConnectionMutation = { __typename?: 'Mutation', create_user_connection: { __typename?: 'createone_user_connection_response', data: { __typename?: 'user_connection', uuid: string } } };

export type GetUsersAddConnectionInputQueryVariables = Types.Exact<{
  get_users_input: Types.Get_Users_Input;
}>;


export type GetUsersAddConnectionInputQuery = { __typename?: 'Query', get_users: { __typename?: 'findmany_user_response', data: Array<{ __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null }> } };


export const CreateConnectionDocument = gql`
    mutation CreateConnection($create_user_connection_input: create_user_connection_input!) {
  create_user_connection(
    create_user_connection_input: $create_user_connection_input
  ) {
    data {
      uuid
    }
  }
}
    `;
export type CreateConnectionMutationFn = Apollo.MutationFunction<CreateConnectionMutation, CreateConnectionMutationVariables>;

/**
 * __useCreateConnectionMutation__
 *
 * To run a mutation, you first call `useCreateConnectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateConnectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createConnectionMutation, { data, loading, error }] = useCreateConnectionMutation({
 *   variables: {
 *      create_user_connection_input: // value for 'create_user_connection_input'
 *   },
 * });
 */
export function useCreateConnectionMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateConnectionMutation, CreateConnectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateConnectionMutation, CreateConnectionMutationVariables>(CreateConnectionDocument, options);
      }
export type CreateConnectionMutationHookResult = ReturnType<typeof useCreateConnectionMutation>;
export type CreateConnectionMutationResult = Apollo.MutationResult<CreateConnectionMutation>;
export type CreateConnectionMutationOptions = Apollo.BaseMutationOptions<CreateConnectionMutation, CreateConnectionMutationVariables>;
export const GetUsersAddConnectionInputDocument = gql`
    query GetUsersAddConnectionInput($get_users_input: get_users_input!) {
  get_users(get_users_input: $get_users_input) {
    data {
      uuid
      identifier
      profile_img
    }
  }
}
    `;

/**
 * __useGetUsersAddConnectionInputQuery__
 *
 * To run a query within a React component, call `useGetUsersAddConnectionInputQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersAddConnectionInputQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersAddConnectionInputQuery({
 *   variables: {
 *      get_users_input: // value for 'get_users_input'
 *   },
 * });
 */
export function useGetUsersAddConnectionInputQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetUsersAddConnectionInputQuery, GetUsersAddConnectionInputQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUsersAddConnectionInputQuery, GetUsersAddConnectionInputQueryVariables>(GetUsersAddConnectionInputDocument, options);
      }
export function useGetUsersAddConnectionInputLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersAddConnectionInputQuery, GetUsersAddConnectionInputQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUsersAddConnectionInputQuery, GetUsersAddConnectionInputQueryVariables>(GetUsersAddConnectionInputDocument, options);
        }
export type GetUsersAddConnectionInputQueryHookResult = ReturnType<typeof useGetUsersAddConnectionInputQuery>;
export type GetUsersAddConnectionInputLazyQueryHookResult = ReturnType<typeof useGetUsersAddConnectionInputLazyQuery>;
export type GetUsersAddConnectionInputQueryResult = Apollo.QueryResult<GetUsersAddConnectionInputQuery, GetUsersAddConnectionInputQueryVariables>;