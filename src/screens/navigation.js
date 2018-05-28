/*
 * navigation.js
 * Copyright (C) 2018 yanpengqiang <yan2010@live.com>
 *
 * Distributed under terms of the MIT license.
 */
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import CurrencyScreen from './currency'
import LoginInScreen from './login'
// TODO: Make this real
import AuthLoadingScreen from './authLoading'

const AppStack = createStackNavigator({ Currency: CurrencyScreen })
const AuthStack = createStackNavigator({ SignIn: LoginInScreen })

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
)
