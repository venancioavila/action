import gql from 'graphql-tag';

const GET_ACTIONS = gql`
  {
    actions @client {
      id
      name
      gpio
      type
    }
  }
`;

export default GET_ACTIONS;
