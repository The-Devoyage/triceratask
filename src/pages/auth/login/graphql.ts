import { gql } from "@apollo/client";

export const AUTHENTICATE_START = gql`
  mutation AuthenticateStart($identifier: String!) {
    authenticate_start(identifier: $identifier)
  }
`;

export const AUTHENTICATE_FINISH = gql`
  mutation AuthenticateFinish($identifier: String!, $public_key: String!) {
    authenticate_finish(identifier: $identifier, public_key: $public_key) {
      token
      user_id
    }
  }
`;
