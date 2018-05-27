/*
 * ExchangeRates.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react'
import { View } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export default () => (
  <Query
    query={gql`
      {
        rates(currency: "USD") {
          currency
          rate
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <View>Loading...</View>
      if (error) return <View>Error :(</View>

      return data.rates.map(({ currency, rate }) => (
        <View key={currency}>
          <View>{`${currency}: ${rate}`}</View>
        </View>
      ))
    }}
  </Query>
)
