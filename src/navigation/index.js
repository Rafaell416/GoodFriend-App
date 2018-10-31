'use strict'

import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import CreateUserBirthday from '../screens/CreateUserBirthday'

const AppNavigation = createStackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      title: 'Good Friend',
      headerStyle: {
        backgroundColor: '#28a996',
      },
      headerTitleStyle: {
        color: 'white'
      },
    }
  },
  CreateUserBirthday: { 
    screen: CreateUserBirthday,
    navigationOptions: {
      title: 'Create Brithday',
      headerStyle: {
        backgroundColor: '#28a996'
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
    }
  }
})

export default AppNavigation
