'use strict'

import React from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import Home from '../screens/home'
import CreateUserBirthday from '../screens/createUserBirthday'

const AppNavigation = createStackNavigator({
  Home: { screen: Home },
  CreateUserBirthday: { screen: CreateUserBirthday }
}, {
  navigationOptions: { header: null }
})

export default AppNavigation
