import * as Types from '../../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type TodosListGetTodosQueryVariables = Types.Exact<{
  get_todos_input: Types.Get_Todos_Input;
  get_todo_accesss_input: Types.Get_Todo_Accesss_Input;
}>;


export type TodosListGetTodosQuery = { __typename?: 'Query', get_todos: { __typename?: 'findmany_todo_response', data: Array<{ __typename?: 'todo', uuid: string, title: string, description: string, completed: boolean, completed_at?: string | null, goal_date?: string | null, created_at: string, updated_at: string, access: { __typename?: 'findmany_todo_access_response', data: Array<{ __typename?: 'todo_access', uuid: string, user: { __typename?: 'findone_user_response', data?: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } | null } }> } }>, meta?: { __typename?: 'meta', request_id: string, count: number, total_count: number, page: number, total_pages: number, service_name: string, executed_at: string, service_version?: string | null, user_uuid?: string | null } | null } };

export type TodoListBulkUpdateMutationVariables = Types.Exact<{
  update_todos_input: Types.Update_Todos_Input;
}>;


export type TodoListBulkUpdateMutation = { __typename?: 'Mutation', update_todos: { __typename?: 'updatemany_todo_response', data: Array<{ __typename?: 'todo', uuid: string, completed: boolean }> } };


export const TodosListGetTodosDocument = gql`
    query TodosListGetTodos($get_todos_input: get_todos_input!, $get_todo_accesss_input: get_todo_accesss_input!) {
  get_todos(get_todos_input: $get_todos_input) {
    data {
      uuid
      title
      description
      completed
      completed_at
      goal_date
      access(access: $get_todo_accesss_input) {
        data {
          uuid
          user(user: {query: {}}) {
            data {
              uuid
              identifier
              profile_img
            }
          }
        }
      }
      created_at
      updated_at
    }
    meta {
      request_id
      count
      total_count
      page
      total_pages
      service_name
      executed_at
      service_version
      user_uuid
    }
  }
}
    `;

/**
 * __useTodosListGetTodosQuery__
 *
 * To run a query within a React component, call `useTodosListGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosListGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosListGetTodosQuery({
 *   variables: {
 *      get_todos_input: // value for 'get_todos_input'
 *      get_todo_accesss_input: // value for 'get_todo_accesss_input'
 *   },
 * });
 */
export function useTodosListGetTodosQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TodosListGetTodosQuery, TodosListGetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TodosListGetTodosQuery, TodosListGetTodosQueryVariables>(TodosListGetTodosDocument, options);
      }
export function useTodosListGetTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodosListGetTodosQuery, TodosListGetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TodosListGetTodosQuery, TodosListGetTodosQueryVariables>(TodosListGetTodosDocument, options);
        }
export type TodosListGetTodosQueryHookResult = ReturnType<typeof useTodosListGetTodosQuery>;
export type TodosListGetTodosLazyQueryHookResult = ReturnType<typeof useTodosListGetTodosLazyQuery>;
export type TodosListGetTodosQueryResult = Apollo.QueryResult<TodosListGetTodosQuery, TodosListGetTodosQueryVariables>;
export const TodoListBulkUpdateDocument = gql`
    mutation TodoListBulkUpdate($update_todos_input: update_todos_input!) {
  update_todos(update_todos_input: $update_todos_input) {
    data {
      uuid
      completed
    }
  }
}
    `;
export type TodoListBulkUpdateMutationFn = Apollo.MutationFunction<TodoListBulkUpdateMutation, TodoListBulkUpdateMutationVariables>;

/**
 * __useTodoListBulkUpdateMutation__
 *
 * To run a mutation, you first call `useTodoListBulkUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTodoListBulkUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [todoListBulkUpdateMutation, { data, loading, error }] = useTodoListBulkUpdateMutation({
 *   variables: {
 *      update_todos_input: // value for 'update_todos_input'
 *   },
 * });
 */
export function useTodoListBulkUpdateMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TodoListBulkUpdateMutation, TodoListBulkUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TodoListBulkUpdateMutation, TodoListBulkUpdateMutationVariables>(TodoListBulkUpdateDocument, options);
      }
export type TodoListBulkUpdateMutationHookResult = ReturnType<typeof useTodoListBulkUpdateMutation>;
export type TodoListBulkUpdateMutationResult = Apollo.MutationResult<TodoListBulkUpdateMutation>;
export type TodoListBulkUpdateMutationOptions = Apollo.BaseMutationOptions<TodoListBulkUpdateMutation, TodoListBulkUpdateMutationVariables>;