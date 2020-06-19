import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:4001',
});

export default client;