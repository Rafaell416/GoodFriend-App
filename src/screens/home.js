import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Header from '../components/header'
import TouchableIcon from '../components/touchableIcon'


export default class Home extends Component {
  state = {}

  render () {
    return (
      <View style={styles.container}>
        <Header
          title="Good Friend"
          backgroundColor="#35d0ba"
          right={
            <TouchableIcon
              name="plus"
              size={30}
              color="white"
              actionToExecuteWhenPress={() => console.log('hello cosmos')}
            />
          }
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
