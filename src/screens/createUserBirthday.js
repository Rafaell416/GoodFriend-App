import React, { Component } from 'react'
import {
  View,
  Text,
  Alert,
  StyleSheet
} from 'react-native'
import Header from '../components/header'
import TouchableIcon from '../components/touchableIcon'
import InputField from '../components/inputField'
import DatePicker from '../components/datePicker'
import ActionButton from '../components/actionButton'
import Preloader from '../components/preloader'

import config from '../../config'

import createClient from '../api'
const api = createClient(config)

export default class CreateUserBirthday extends Component {
  state = {
    first_name: '',
    last_name: '',
    birthday: '',
    loading: false
  }

  _areAllInputsFilled = () => {
    const { first_name, last_name, birthday } = this.state
    const check = first_name && last_name && birthday
    if ( check ) return false
    return true
  }

  _createBirthday = async () => {
     this.setState({ loading: true })
     const { first_name, last_name, birthday } = this.state

     api.createBirthday({ first_name, last_name, birthday })
     .then(res => {
       this.props.navigation.state.params.handleCreateBirthday(res)
       this.setState({ loading: false })
       this.props.navigation.goBack()
     })
     .catch(err => {
       Alert.alert('There was an error', 'Try again :/')
       console.log(err)
     })
  }

  render () {
    const { first_name, last_name, loading } = this.state
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
          placeholder="First name"
          value={ first_name }
          onChangeText={ first_name => this.setState({ first_name }) }
        />
        <InputField
          icon="user-plus"
          placeholder="Last name"
          value={ last_name }
          onChangeText={ last_name => this.setState({ last_name }) }
        />
        <DatePicker
          handleOnDatePicked={( birthday ) => this.setState({ birthday })}
        />
        <View style={styles.buttonView}>
           {
             loading
              ? <Preloader size="large" color="#28a996"/>
              : <ActionButton
                text="SAVE"
                textColor="white"
                buttonColor="#ff9234"
                actionToExecuteWhenPress={this._createBirthday}
                disabled={this._areAllInputsFilled()}
              />
           }
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  buttonView: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
