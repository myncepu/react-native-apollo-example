import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import AppNavigator from './screens'

const client = new ApolloClient({
  uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql'
})

export default () => (
  <ApolloProvider client={client}>
    <AppNavigator />
  </ApolloProvider>
)

// AppRegistry.registerComponent('App', () => App)
