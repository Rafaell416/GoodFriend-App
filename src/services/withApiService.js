import React, { Component } from 'react'
import { Alert } from 'react-native'
import { addRandomBirthdayToUsers, findAndUpdate } from '../utils'
import api from '../api'

export function withApiService (WrappedComponent, selectData) {
  return class extends Component {
    state = {
      users: [],
      first_name: '',
      last_name: '',
      birthday: '',
      uid: '',
      avatar: ''
    }

    componentWillMount () {
      this._getUsers()
    }
  
    _getUsers = async () => {
      const data = await api.getUsers()
      const users = addRandomBirthdayToUsers(data)
      this.setState({ users })
    }

    _createBirthdayInScreen = (user) =>  this.setState({ users: [ ...this.state.users, user ] })

    _handleDeleteFromScreen = ( uid ) => {
      Alert.alert('Delete birthday', 'Are you sure you want to delete this birthday ?', [
        { text: 'Cancel', onPress: () => console.log('cancel pressed'), style: 'cancel' },
        { text: 'Delete', onPress: () => this.setState({ users: this.state.users.filter(u => u.id !== uid ) }) }
      ])
    }

    _deleteBirthday = (uid) => {
      api.deleteBirthday(uid)
      .then(res => {
        if ( res.ok ) {
          this._handleDeleteFromScreen( uid )
        }
      })
      .catch(err => {
        Alert.alert('There was an error', 'Try again :/')
        console.log(err)
      })
    }

    _updateBirthday = (user) => {
      this.props.navigation.navigate(
        'UserBirthdayForm',
        {
          isEditing: true,
          user,
          handleOnEditFinish: this._handleOnEditFinish
        }
      )
    }

    _handleOnEditFinish = (user) => {
      const updatedList = findAndUpdate(this.state.users, user)
      this.setState({ users: updatedList })
    }


    render () {
      return (
        <WrappedComponent 
          { ...this.props } 
          users={ this.state.users } 
          _createBirthday={ this._createBirthday }
          _createBirthdayInScreen={ this._createBirthdayInScreen }
          _deleteBirthday={ this._deleteBirthday }
          _updateBirthday={ this._updateBirthday }
        />
      )
    }
  }
}