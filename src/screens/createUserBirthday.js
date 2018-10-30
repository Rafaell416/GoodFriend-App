import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Header from '../components/header'
import TouchableIcon from '../components/touchableIcon'
import InputField from '../components/inputField'

export default class CreateUserBirthday extends Component {
  state = {
    user: {
      first_name: '',
      last_name: '',
      birthday: ''
    }
  }

  render () {
    const { first_name, last_name } = this.state.user
    return (
      <View style={styles.container}>
        <Header
          title="Create Birthday"
          backgroundColor="#28a996"
          left= {
            <TouchableIcon
              name="arrow-left"
              size={30}
              color="white"
              actionToExecuteWhenPress={() => {
                //this.props.navigation.state.params.handleCreateBirthday()
                this.props.navigation.goBack()
              }}
            />
          }
        />

        <InputField
          icon="user"
          placeholder="first name"
          value={ first_name }
          onChangeText={ first_name => this.setState({ first_name }) }
        />
        <InputField
          icon="user-plus"
          placeholder="last name"
          value={ last_name }
          onChangeText={ last_name => this.setState({ last_name }) }
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
