import gql from 'graphql-tag'

const RASPBERRY = gql`
  {
    raspberry @client {
      id
      name
      ip
      password
    }
  }
`

export default RASPBERRY
