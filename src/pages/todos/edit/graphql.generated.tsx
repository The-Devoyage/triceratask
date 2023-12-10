import * as Types from '../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateTodosMutationVariables = Types.Exact<{
  update_todos_input: Types.Update_Todos_Input;
}>;


export type UpdateTodosMutation = { __typename?: 'Mutation', update_todos: Array<{ __typename?: 'todo', uuid: string, title: string, description: string, completed: boolean, completed_at?: string | null, goal_date?: string | null }> };

export type EditGetTodoQueryVariables = Types.Exact<{
  get_todo_input: Types.Get_Todo_Input;
  get_todo_accesss_input: Types.Get_Todo_Accesss_Input;
}>;


export type EditGetTodoQuery = { __typename?: 'Query', get_todo: { __typename?: 'todo', uuid: string, title: string, description: string, completed: boolean, completed_at?: string | null, goal_date?: string | null, access: Array<{ __typename?: 'todo_access', uuid: string, manage: boolean, edit: boolean, revoked: boolean, user: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } }> } };


export const UpdateTodosDocument = gql`
    mutation UpdateTodos($update_todos_input: update_todos_input!) {
  update_todos(update_todos_input: $update_todos_input) {
    uuid
    title
    description
    completed
    completed_at
    goal_date
  }
}
    `;
export type UpdateTodosMutationFn = Apollo.MutationFunction<UpdateTodosMutation, UpdateTodosMutationVariables>;

/**
 * __useUpdateTodosMutation__
 *
 * To run a mutation, you first call `useUpdateTodosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTodosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTodosMutation, { data, loading, error }] = useUpdateTodosMutation({
 *   variables: {
 *      update_todos_input: // value for 'update_todos_input'
 *   },
 * });
 */
export function useUpdateTodosMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateTodosMutation, UpdateTodosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateTodosMutation, UpdateTodosMutationVariables>(UpdateTodosDocument, options);
      }
export type UpdateTodosMutationHookResult = ReturnType<typeof useUpdateTodosMutation>;
export type UpdateTodosMutationResult = Apollo.MutationResult<UpdateTodosMutation>;
export type UpdateTodosMutationOptions = Apollo.BaseMutationOptions<UpdateTodosMutation, UpdateTodosMutationVariables>;
export const EditGetTodoDocument = gql`
    query EditGetTodo($get_todo_input: get_todo_input!, $get_todo_accesss_input: get_todo_accesss_input!) {
  get_todo(get_todo_input: $get_todo_input) {
    uuid
    title
    description
    completed
    completed_at
    goal_date
    access(access: $get_todo_accesss_input) {
      uuid
      user(user: {query: {}}) {
        uuid
        identifier
        profile_img
      }
      manage
      edit
      revoked
    }
  }
}
    `;

/**
 * __useEditGetTodoQuery__
 *
 * To run a query within a React component, call `useEditGetTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditGetTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditGetTodoQuery({
 *   variables: {
 *      get_todo_input: // value for 'get_todo_input'
 *      get_todo_accesss_input: // value for 'get_todo_accesss_input'
 *   },
 * });
 */
export function useEditGetTodoQuery(baseOptions: ApolloReactHooks.QueryHookOptions<EditGetTodoQuery, EditGetTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<EditGetTodoQuery, EditGetTodoQueryVariables>(EditGetTodoDocument, options);
      }
export function useEditGetTodoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<EditGetTodoQuery, EditGetTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<EditGetTodoQuery, EditGetTodoQueryVariables>(EditGetTodoDocument, options);
        }
export type EditGetTodoQueryHookResult = ReturnType<typeof useEditGetTodoQuery>;
export type EditGetTodoLazyQueryHookResult = ReturnType<typeof useEditGetTodoLazyQuery>;
export type EditGetTodoQueryResult = Apollo.QueryResult<EditGetTodoQuery, EditGetTodoQueryVariables>;