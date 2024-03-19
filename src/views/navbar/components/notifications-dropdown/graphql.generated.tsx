import * as Types from '../../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type NavbarGetNotificationsQueryVariables = Types.Exact<{
  get_notifications_input: Types.Get_Notifications_Input;
}>;


export type NavbarGetNotificationsQuery = { __typename?: 'Query', get_notifications: { __typename?: 'findmany_notification_response', data: Array<{ __typename?: 'notification', uuid: string, created_at: string, user: { __typename?: 'findone_user_response', data?: { __typename?: 'user', uuid: string, identifier: string } | null }, notification_message: { __typename?: 'findone_notification_message_response', data: { __typename?: 'notification_message', identifier: string, message: string } }, todo: { __typename?: 'findone_todo_response', data: { __typename?: 'todo', title: string, uuid: string } }, created_by: { __typename?: 'findone_user_response', data?: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } | null } }> } };

export type NavbarUpdateNotificationsMutationVariables = Types.Exact<{
  update_notifications_input: Types.Update_Notifications_Input;
}>;


export type NavbarUpdateNotificationsMutation = { __typename?: 'Mutation', update_notifications: { __typename?: 'updatemany_notification_response', data: Array<{ __typename?: 'notification', uuid: string }> } };


export const NavbarGetNotificationsDocument = gql`
    query NavbarGetNotifications($get_notifications_input: get_notifications_input!) {
  get_notifications(get_notifications_input: $get_notifications_input) {
    data {
      uuid
      user(user: {query: {}}) {
        data {
          uuid
          identifier
        }
      }
      created_at
      notification_message(notification_message: {query: {}}) {
        data {
          identifier
          message
        }
      }
      todo(todo: {query: {}}) {
        data {
          title
          uuid
        }
      }
      created_by(created_by: {query: {}}) {
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
 * __useNavbarGetNotificationsQuery__
 *
 * To run a query within a React component, call `useNavbarGetNotificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNavbarGetNotificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNavbarGetNotificationsQuery({
 *   variables: {
 *      get_notifications_input: // value for 'get_notifications_input'
 *   },
 * });
 */
export function useNavbarGetNotificationsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<NavbarGetNotificationsQuery, NavbarGetNotificationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<NavbarGetNotificationsQuery, NavbarGetNotificationsQueryVariables>(NavbarGetNotificationsDocument, options);
      }
export function useNavbarGetNotificationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NavbarGetNotificationsQuery, NavbarGetNotificationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<NavbarGetNotificationsQuery, NavbarGetNotificationsQueryVariables>(NavbarGetNotificationsDocument, options);
        }
export type NavbarGetNotificationsQueryHookResult = ReturnType<typeof useNavbarGetNotificationsQuery>;
export type NavbarGetNotificationsLazyQueryHookResult = ReturnType<typeof useNavbarGetNotificationsLazyQuery>;
export type NavbarGetNotificationsQueryResult = Apollo.QueryResult<NavbarGetNotificationsQuery, NavbarGetNotificationsQueryVariables>;
export const NavbarUpdateNotificationsDocument = gql`
    mutation NavbarUpdateNotifications($update_notifications_input: update_notifications_input!) {
  update_notifications(update_notifications_input: $update_notifications_input) {
    data {
      uuid
    }
  }
}
    `;
export type NavbarUpdateNotificationsMutationFn = Apollo.MutationFunction<NavbarUpdateNotificationsMutation, NavbarUpdateNotificationsMutationVariables>;

/**
 * __useNavbarUpdateNotificationsMutation__
 *
 * To run a mutation, you first call `useNavbarUpdateNotificationsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNavbarUpdateNotificationsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [navbarUpdateNotificationsMutation, { data, loading, error }] = useNavbarUpdateNotificationsMutation({
 *   variables: {
 *      update_notifications_input: // value for 'update_notifications_input'
 *   },
 * });
 */
export function useNavbarUpdateNotificationsMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<NavbarUpdateNotificationsMutation, NavbarUpdateNotificationsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<NavbarUpdateNotificationsMutation, NavbarUpdateNotificationsMutationVariables>(NavbarUpdateNotificationsDocument, options);
      }
export type NavbarUpdateNotificationsMutationHookResult = ReturnType<typeof useNavbarUpdateNotificationsMutation>;
export type NavbarUpdateNotificationsMutationResult = Apollo.MutationResult<NavbarUpdateNotificationsMutation>;
export type NavbarUpdateNotificationsMutationOptions = Apollo.BaseMutationOptions<NavbarUpdateNotificationsMutation, NavbarUpdateNotificationsMutationVariables>;