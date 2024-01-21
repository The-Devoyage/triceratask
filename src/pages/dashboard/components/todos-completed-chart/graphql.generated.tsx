import * as Types from '../../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type TodoCompletedChartGetTodosQueryVariables = Types.Exact<{
  get_todos_input: Types.Get_Todos_Input;
}>;


export type TodoCompletedChartGetTodosQuery = { __typename?: 'Query', get_todos: { __typename?: 'findmany_todo_response', data: Array<{ __typename?: 'todo', uuid: string, completed: boolean, updated_at: string, completed_at?: string | null, goal_date?: string | null }> } };


export const TodoCompletedChartGetTodosDocument = gql`
    query TodoCompletedChartGetTodos($get_todos_input: get_todos_input!) {
  get_todos(get_todos_input: $get_todos_input) {
    data {
      uuid
      completed
      updated_at
      completed_at
      goal_date
    }
  }
}
    `;

/**
 * __useTodoCompletedChartGetTodosQuery__
 *
 * To run a query within a React component, call `useTodoCompletedChartGetTodosQuery` and pass it any options that fit your needs.
 * When your component renders, `useTodoCompletedChartGetTodosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTodoCompletedChartGetTodosQuery({
 *   variables: {
 *      get_todos_input: // value for 'get_todos_input'
 *   },
 * });
 */
export function useTodoCompletedChartGetTodosQuery(baseOptions: ApolloReactHooks.QueryHookOptions<TodoCompletedChartGetTodosQuery, TodoCompletedChartGetTodosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<TodoCompletedChartGetTodosQuery, TodoCompletedChartGetTodosQueryVariables>(TodoCompletedChartGetTodosDocument, options);
      }
export function useTodoCompletedChartGetTodosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<TodoCompletedChartGetTodosQuery, TodoCompletedChartGetTodosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<TodoCompletedChartGetTodosQuery, TodoCompletedChartGetTodosQueryVariables>(TodoCompletedChartGetTodosDocument, options);
        }
export type TodoCompletedChartGetTodosQueryHookResult = ReturnType<typeof useTodoCompletedChartGetTodosQuery>;
export type TodoCompletedChartGetTodosLazyQueryHookResult = ReturnType<typeof useTodoCompletedChartGetTodosLazyQuery>;
export type TodoCompletedChartGetTodosQueryResult = Apollo.QueryResult<TodoCompletedChartGetTodosQuery, TodoCompletedChartGetTodosQueryVariables>;