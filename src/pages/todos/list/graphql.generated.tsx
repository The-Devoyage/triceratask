import * as Types from '../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type TodosListGetTodosQueryVariables = Types.Exact<{
  get_todos_input: Types.Get_Todos_Input;
  get_user_input: Types.Get_User_Input;
  get_todo_accesss_input: Types.Get_Todo_Accesss_Input;
}>;


export type TodosListGetTodosQuery = { __typename?: 'Query', get_todos: Array<{ __typename?: 'todo', uuid: string, title: string, description: string, completed: boolean, created_at: string, updated_at: string, completed_at?: string | null, goal_date?: string | null, created_by?: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } | null, access: Array<{ __typename?: 'todo_access', uuid: string, user: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } }> }> };

export type TodosListGetTodosByAccessQueryVariables = Types.Exact<{
  get_todo_accesss_input: Types.Get_Todo_Accesss_Input;
}>;


export type TodosListGetTodosByAccessQuery = { __typename?: 'Query', get_todo_accesss: Array<{ __typename?: 'todo_access', uuid: string, todo: { __typename?: 'todo', uuid: string, title: string, description: string, completed: boolean, created_at: string, updated_at: string, completed_at?: string | null, goal_date?: string | null, created_by?: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } | null, access: Array<{ __typename?: 'todo_access', uuid: string, user: { __typename?: 'user', uuid: string, identifier: string, profile_img?: string | null } }> } }> };


export const TodosListGetTodosDocument = gql`
    query TodosListGetTodos($get_todos_input: get_todos_input!, $get_user_input: get_user_input!, $get_todo_accesss_input: get_todo_accesss_input!) {
  get_todos(get_todos_input: $get_todos_input) {
    uuid
    title
    description
    completed
    created_at
    updated_at
    completed_at
    goal_date
    created_by(created_by: $get_user_input) {
      uuid
      identifier
      profile_img
    }
    access(access: $get_todo_accesss_input) {
      uuid
      user(user: {query: {}}) {
        uuid
        identifier
        profile_img
      }
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
 *      get_user_input: // value for 'get_user_input'
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
export const TodosListGetTodosByAccessDocument = gql`
    query TodosListGetTodosByAccess($get_todo_accesss_input: get_todo_accesss_input!) {
  get_todo_accesss(get_todo_accesss_input: $get_todo_accesss_input) {
    uuid
    todo(todo: {query: {}}) {
      uuid
      title
      description
      completed
      created_at
      updated_at
      completed_at
      goal_date
      created_by(created_by: {query: {}}) {
        uuid
        identifier
        profile_img
      }
      access(access: {query: {}}) {
        uuid
        user(user: {query: {}}) {
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
 * __useTodosListGetTodosByAccessQuery__
 *
 * To run a query within a React component, call `useTodosListGetTodosByAccessQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodosListGetTodosByAccessQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodosListGetTodosByAccessQuery({
 *   variables: {
 *      get_todo_accesss_input: // value for 'get_todo_accesss_input'
 *   },
 * });
 */
export function useTodosListGetTodosByAccessQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TodosListGetTodosByAccessQuery, TodosListGetTodosByAccessQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TodosListGetTodosByAccessQuery, TodosListGetTodosByAccessQueryVariables>(TodosListGetTodosByAccessDocument, options);
      }
export function useTodosListGetTodosByAccessLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodosListGetTodosByAccessQuery, TodosListGetTodosByAccessQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TodosListGetTodosByAccessQuery, TodosListGetTodosByAccessQueryVariables>(TodosListGetTodosByAccessDocument, options);
        }
export type TodosListGetTodosByAccessQueryHookResult = ReturnType<typeof useTodosListGetTodosByAccessQuery>;
export type TodosListGetTodosByAccessLazyQueryHookResult = ReturnType<typeof useTodosListGetTodosByAccessLazyQuery>;
export type TodosListGetTodosByAccessQueryResult = Apollo.QueryResult<TodosListGetTodosByAccessQuery, TodosListGetTodosByAccessQueryVariables>;