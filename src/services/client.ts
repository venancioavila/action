import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import AsyncStorage from '@react-native-community/async-storage'
import { WebSocketLink } from 'apollo-link-ws'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'

var ip = null

const customFetch = async (uri: any, options: any) => {
  const rasp: any = await AsyncStorage.getItem('@action.raspberry')
  const data = JSON.parse(rasp)
  ip = data.ip
  return fetch(`http://${data.ip}:4000/graphql`, options)
}

const cache = new InMemoryCache()

cache.writeData({
  data: { actions: [] },
})

const wsLink = new WebSocketLink({
  uri: `ws://${ip}:4000/graphql`,
  options: {
    reconnect: true,
  },
})

const httpLink = createHttpLink({
  fetch: customFetch,
})

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  httpLink,
)

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
  resolvers: {},
})

export default client
