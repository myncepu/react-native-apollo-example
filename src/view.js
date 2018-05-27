import React, { Component } from 'react'
import { StatusBar, View, Text, StyleSheet } from 'react-native'
import ExchangeRateList from './list'
import { colors, fontSize } from './styles'

export default class ExchangeRateView extends Component {
  state = {
    currency: 'CNY'
  };

  onCurrencyChange = currency => this.setState(() => ({ currency }));

  render() {
    const { currency } = this.state

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.heading}>{`1 ${this.state.currency}`}</Text>
        <ExchangeRateList
          currency={currency}
          onCurrencyChange={this.onCurrencyChange}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'darkblue',
  },
  heading: {
    fontSize: fontSize.large,
    fontWeight: '200',
    color: colors.white,
    letterSpacing: 6
  }
})
