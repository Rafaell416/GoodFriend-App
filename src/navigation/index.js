'use strict'

import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import UserBirthdayForm from '../screens/UserBirthdayForm'
import UserDetail from '../screens/UserDetail'

const AppNavigation = createStackNavigator({
  Home: { screen: Home },
  UserBirthdayForm: { screen: UserBirthdayForm },
  UserDetail: { screen: UserDetail }
})

export default AppNavigation
