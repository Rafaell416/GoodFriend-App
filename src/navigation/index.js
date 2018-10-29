'use strict'

import React from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import Home from '../screens/home'

const AppNavigation = createStackNavigator({
  Home: { screen: Home }
}, {
  navigationOptions: { header: null }
})

export default AppNavigation
