'use strict'

import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import UserBirthdayForm from '../screens/UserBirthdayForm'

const AppNavigation = createStackNavigator({
  Home: { screen: Home },
  UserBirthdayForm: { screen: UserBirthdayForm }
})

export default AppNavigation
