import React, { Component } from 'react'
import {
  View,
  Alert,
  StyleSheet
} from 'react-native'
import Header from '../components/Header'
import TouchableIcon from '../components/TouchableIcon'
import InputField from '../components/InputField'
import DatePicker from '../components/DatePicker'
import ActionButton from '../components/ActionButton'
import Preloader from '../components/Preloader'
import { theme } from '../utils'
import api from '../api'

export default class UserBirthdayForm extends Component {
  state = {
    first_name: '',
    last_name: '',
    birthday: '',
    loading: false,
    uid: '',
    avatar: ''
  }

  static navigationOptions = ({ navigation }) => ({
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

  componentWillMount () {
    const { isEditing } = this.props.navigation.state.params
    if ( isEditing ) {
      this._handleLoadDataWhenEditing()
    }
  }

  _handleLoadDataWhenEditing = () => {
    const { user: { first_name, last_name, birthday, id, avatar } } = this.props.navigation.state.params
    this.setState({ first_name, last_name, birthday, uid: id, avatar })
  }

  _areAllInputsFilled = () => {
    const { first_name, last_name, birthday } = this.state
    const check = first_name && last_name && birthday
    if ( check ) return false
    return true
  }

  _updateBirthday = async () => {
    this.setState({ loading: true })
    const { first_name, last_name, birthday, uid, avatar } = this.state

    api.updateBirthday({ first_name, last_name, birthday, uid })
    .then(res => {
      if ( res.ok ) {
        this.props.navigation.state.params.handleOnEditFinish({ first_name, last_name, birthday, id: uid, avatar  })
        this.setState({ loading: false })
        this.props.navigation.goBack()
      }
    })
    .catch(err => {
      Alert.alert('There was an error', 'Try again :/')
      console.log(err)
    })
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
    const { first_name, last_name, loading, birthday } = this.state
    const { isEditing } = this.props.navigation.state.params
    return (
      <View style={styles.container}>
        <InputField
          icon="user"
          placeholder="First name"
          value={ first_name }
          onChangeText={ first_name => this.setState({ first_name }) }
          themeColor={ theme.primaryColor }
        />
        <InputField
          icon="user-plus"
          placeholder="Last name"
          value={ last_name }
          onChangeText={ last_name => this.setState({ last_name }) }
          themeColor={ theme.primaryColor }
        />
        <DatePicker
          value={ birthday }
          handleOnDatePicked={( birthday ) => this.setState({ birthday })}
          iconColor={ theme.primaryColor }
        />
        <View style={styles.buttonView}>
           {
             loading
              ? <Preloader size="large" color={theme.primaryColor}/>
              : <ActionButton
                text="SAVE"
                textColor="white"
                buttonColor={theme.orange}
                actionToExecuteWhenPress={ isEditing ? this._updateBirthday : this._createBirthday }
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
