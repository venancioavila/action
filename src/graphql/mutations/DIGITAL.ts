import gql from 'graphql-tag';

const DIGITAL = gql`
  mutation Digital($pin: Int, $state: Int) {
    digital(pin: $pin, state: $state) {
      state
      pin
    }
  }
`;

export default DIGITAL;
