'use strict'

import React from 'react'
import { createStackNavigator } from 'react-navigation'
import Home from '../screens/Home'
import UserBirthdayForm from '../screens/UserBirthdayForm'
import UserDetail from '../screens/UserDetail'

import Header from '../components/Header'
import TouchableIcon from '../components/TouchableIcon'
import { theme } from '../utils'

const AppNavigation = createStackNavigator({
  Home: { 
    screen: Home,
    navigationOptions: {
      header: <Header title="Good Friend" backgroundColor={theme.primaryColor} /> 
    }
  },
  UserBirthdayForm: { 
    screen: UserBirthdayForm,
    navigationOptions: ({ navigation }) =>  ({
      header: (
        <Header 
          title={ 
            navigation.state.params.isEditing ? 'Edit Birthday' : 'Create Birthday' 
          } 
          backgroundColor={theme.primaryColor}
          left= {
            <TouchableIcon
              name="arrow-left"
              size={30}
              color="white"
              actionToExecuteWhenPress={() => navigation.goBack()}
            />
          }
        />
      )
    })
  },
  UserDetail: { 
    screen: UserDetail,
    navigationOptions: ({ navigation }) =>  ({
      header: (
        <Header 
          title="Detail" 
          backgroundColor={theme.primaryColor}
          left= {
            <TouchableIcon
              name="arrow-left"
              size={30}
              color="white"
              actionToExecuteWhenPress={() => navigation.goBack()}
            />
          }
        />
      )
    })
  }
})

export default AppNavigation
