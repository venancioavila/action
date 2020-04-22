import {ApolloClient} from 'apollo-client';
import {InMemoryCache, NormalizedCacheObject} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import AsyncStorage from '@react-native-community/async-storage';
import {WebSocketLink} from 'apollo-link-ws';
import {split} from 'apollo-link';
import {getMainDefinition} from 'apollo-utilities';

const cache = new InMemoryCache();

cache.writeData({
  data: {actions: []},
});

const wsLink = new WebSocketLink({
  uri: `ws://apollotask-server.herokuapp.com/graphql`,
  options: {
    reconnect: true,
  },
});

const httpLink = new HttpLink({
  uri: 'https://apollotask-server.herokuapp.com/',
});

const link = split(
  // split based on operation type
  ({query}) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link,
  resolvers: {},
});

export default client;