import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  StyleSheet
} from 'react-native'
import UsersList from '../components/UsersList'
import { addRandomBirthdayToUsers, findAndUpdate } from '../utils'
import config from '../../config'

import createClient from '../api'
const api = createClient(config)


export default class Home extends Component {
  state = {
    users: []
  }

  componentWillMount () {
    this._getUsers()
  }

  _getUsers = async () => {
    const data = await api.getUsers()
    const users = addRandomBirthdayToUsers(data)
    this.setState({ users })
  }

  _createBirthdayInScreen = (user) => this.setState({ users: [ ...this.state.users, user ] })

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

  _handleDeleteFromScreen = ( uid ) => {
    Alert.alert('Delete birthday', 'Are you sure you want to delete this birthday ?', [
      { text: 'Cancel', onPress: () => console.log('cancel pressed'), style: 'cancel' },
      { text: 'Delete', onPress: () => this.setState({ users: this.state.users.filter(u => u.id !== uid ) }) }
    ])
  }

  _updateBirthday = (user) => {
    this.props.navigation.navigate(
      'CreateUserBirthday',
      {
        isEding: true,
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
    const { users } = this.state
    return (
      <View style={styles.container}>
        <UsersList
          users={ users }
          navigation={ this.props.navigation }
          handleCreateBirthday={ this._createBirthdayInScreen }
          handleDeleteBirthday={ this._deleteBirthday }
          handleUpdateBirthday={ this._updateBirthday }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
})
