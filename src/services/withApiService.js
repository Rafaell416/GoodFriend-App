import React from 'react'
import { Alert } from 'react-native'
import { addRandomBirthdayToUsers } from '../utils'
import api from '../api'

export function withApiService (WrappedComponent) {
  class Hoc extends React.Component {
    state = {
      users: []
    }

    componentDidMount(){
      this._getUsers()
    }
  
    _getUsers = () => {
      api.getUsers()
      .then(data => addRandomBirthdayToUsers(data))
      .then(users => this.setState({ users }))
    }

    _createBirthday = (user) => {
      api.createBirthday(user)
      .then(res => {
        this._createBirthdayInScreen(res)
        this.props.navigation.goBack()
      })
      .catch(err => {
        Alert.alert('There was an error', 'Try again :/')
        console.log(err)
      })
    }

    _createBirthdayInScreen = (user) => {
      this.setState({ users: [ ...this.state.users, user ] })
    }

    render () {
      return (
        <WrappedComponent 
          { ...this.props }
          users={ this.state.users }
          _createBirthday={ this._createBirthday }
        />
      )
    }
  }

  Hoc.navigationOptions = WrappedComponent.navigationOptions
  return Hoc 
}