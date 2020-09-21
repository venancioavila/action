import gql from 'graphql-tag';

const DHT = gql`
  query DHT($pin: Int) {
    DHT(pin: $pin) {
      temperature
      humidity
      pin
    }
  }
`;

export default DHT;
