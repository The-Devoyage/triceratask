import * as Types from '../../../../../../../types/generated';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
const defaultOptions = {} as const;
export type TaskAccessUpdateAccesssMutationVariables = Types.Exact<{
  update_todo_accesss_input: Types.Update_Todo_Accesss_Input;
}>;


export type TaskAccessUpdateAccesssMutation = { __typename?: 'Mutation', update_todo_accesss: Array<{ __typename?: 'todo_access', uuid: string }> };


export const TaskAccessUpdateAccesssDocument = gql`
    mutation TaskAccessUpdateAccesss($update_todo_accesss_input: update_todo_accesss_input!) {
  update_todo_accesss(update_todo_accesss_input: $update_todo_accesss_input) {
    uuid
  }
}
    `;
export type TaskAccessUpdateAccesssMutationFn = Apollo.MutationFunction<TaskAccessUpdateAccesssMutation, TaskAccessUpdateAccesssMutationVariables>;

/**
 * __useTaskAccessUpdateAccesssMutation__
 *
 * To run a mutation, you first call `useTaskAccessUpdateAccesssMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTaskAccessUpdateAccesssMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [taskAccessUpdateAccesssMutation, { data, loading, error }] = useTaskAccessUpdateAccesssMutation({
 *   variables: {
 *      update_todo_accesss_input: // value for 'update_todo_accesss_input'
 *   },
 * });
 */
export function useTaskAccessUpdateAccesssMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<TaskAccessUpdateAccesssMutation, TaskAccessUpdateAccesssMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<TaskAccessUpdateAccesssMutation, TaskAccessUpdateAccesssMutationVariables>(TaskAccessUpdateAccesssDocument, options);
      }
export type TaskAccessUpdateAccesssMutationHookResult = ReturnType<typeof useTaskAccessUpdateAccesssMutation>;
export type TaskAccessUpdateAccesssMutationResult = Apollo.MutationResult<TaskAccessUpdateAccesssMutation>;
export type TaskAccessUpdateAccesssMutationOptions = Apollo.BaseMutationOptions<TaskAccessUpdateAccesssMutation, TaskAccessUpdateAccesssMutationVariables>;