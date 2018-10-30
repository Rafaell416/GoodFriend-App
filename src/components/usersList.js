import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native'

export default class UsersList extends Component {
  state = {

  }

  render () {
    const { users } = this.props
    console.log(users)
    return (
      <View>

      </View>
    )
  }
}
