import { gql } from "@apollo/client";

export const REGISTER_START = gql`
  mutation RegisterStart($identifier: String!) {
    register_start(identifier: $identifier)
  }
`;

export const REGISTER_FINISH = gql`
  mutation RegisterFinish($identifier: String!, $public_key: String!) {
    register_finish(identifier: $identifier, public_key: $public_key)
  }
`;
