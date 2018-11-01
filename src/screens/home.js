import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import UsersList from '../components/UsersList'
import Header from '../components/Header'
import { withApiService } from '../services'
import { theme } from '../utils'

class Home extends Component {

  static navigationOptions = {
    header: <Header title="Good Friend" backgroundColor={theme.primaryColor} /> 
  }

  _goToScreen = ({ screen, params }) => {
    this.props.navigation.navigate( screen, params )
  }

  render () {
    const { users } = this.props
    return (
      <View style={styles.container}>
        <UsersList
          users={ users }
          handleNavigateToScreen={ this._goToScreen }
          // handleCreateBirthday={ this.props._createBirthdayInScreen }
          // handleDeleteBirthday={ this.props._deleteBirthday }
          // handleUpdateBirthday={ this.props._updateBirthday }
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

export default withApiService(Home)

