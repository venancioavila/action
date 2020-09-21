import gql from 'graphql-tag'

const SERVO = gql`
  mutation Servo($pin: Int, $state: Int) {
    servo(pin: $pin, state: $state) {
      state
      pin
    }
  }
`

export default SERVO
