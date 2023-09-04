import * as Types from '../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateTodosMutationVariables = Types.Exact<{
  update_todos_input: Types.Update_Todos_Input;
}>;


export type UpdateTodosMutation = { __typename?: 'Mutation', update_todos: Array<{ __typename?: 'todo', id: number, title: string, description: string, completed: boolean, completed_at?: string | null }> };

export type GetTodoQueryVariables = Types.Exact<{
  get_todo_input: Types.Get_Todo_Input;
}>;


export type GetTodoQuery = { __typename?: 'Query', get_todo: { __typename?: 'todo', id: number, title: string, description: string, completed: boolean } };


export const UpdateTodosDocument = gql`
    mutation UpdateTodos($update_todos_input: update_todos_input!) {
  update_todos(update_todos_input: $update_todos_input) {
    id
    title
    description
    completed
    completed_at
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
export const GetTodoDocument = gql`
    query GetTodo($get_todo_input: get_todo_input!) {
  get_todo(get_todo_input: $get_todo_input) {
    id
    title
    description
    completed
  }
}
    `;

/**
 * __useGetTodoQuery__
 *
 * To run a query within a React component, call `useGetTodoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoQuery({
 *   variables: {
 *      get_todo_input: // value for 'get_todo_input'
 *   },
 * });
 */
export function useGetTodoQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
      }
export function useGetTodoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTodoQuery, GetTodoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetTodoQuery, GetTodoQueryVariables>(GetTodoDocument, options);
        }
export type GetTodoQueryHookResult = ReturnType<typeof useGetTodoQuery>;
export type GetTodoLazyQueryHookResult = ReturnType<typeof useGetTodoLazyQuery>;
export type GetTodoQueryResult = Apollo.QueryResult<GetTodoQuery, GetTodoQueryVariables>;