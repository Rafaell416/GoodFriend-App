'use strict'

import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import CreateUserBirthday from '../screens/CreateUserBirthday'

const AppNavigation = createStackNavigator({
  Home: { screen: Home },
  CreateUserBirthday: { screen: CreateUserBirthday }
})

export default AppNavigation
