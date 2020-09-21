import gql from 'graphql-tag';

const MODULAR = gql`
  mutation Modular($pin: Int, $state: Int) {
    modular(pin: $pin, state: $state) {
      state
      pin
    }
  }
`;

export default MODULAR;
