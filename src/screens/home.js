import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Header from '../components/header'
import TouchableIcon from '../components/touchableIcon'
import UsersList from '../components/usersList'
import { addRandomBirthdayToUsers } from '../utils'

import createClient from '../api'
const api = createClient()


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

  render () {
    const { users } = this.state
    return (
      <View style={styles.container}>
        <Header
          title="Good Friend"
          backgroundColor="#28a996"
        />
        <UsersList users={users} />
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
