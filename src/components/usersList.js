import React, { Component } from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types'
import { Feather } from '@expo/vector-icons'
import { theme } from '../utils'

import TouchableCard from './TouchableCard'
import UserItem from './UserItem'
import Preloader from './Preloader'

export default class UsersList extends Component {

  _keyExtractor = ( item ) => String( item.id )

  _renderItem = ({ item, index }) => {
    if ( index === 0 ) {
      return (
        <TouchableCard actionToExecute={ this.props.handleNavigateToCreateBirthday }
        >
          <View style={styles.addBirthdayView}>
            <Feather name="plus" size={40} color={theme.primaryColor}/>
            <Text style={styles.addBirthdayText}>Add Birthday</Text>
          </View>
        </TouchableCard>
      )
    } else {
      return (
        <TouchableCard disabled >
          <UserItem
            { ...item }
            handleDeleteBirthday={ this.props.handleDeleteBirthday }
            handleUpdateBirthday={ this.props.handleUpdateBirthday }
          />
        </TouchableCard>
      )
    }
  }

  _renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Friend's Birthdays</Text>
      </View>
    )
  }


  render () {
    const { users } = this.props
    return (
      <View style={styles.container}>
        {
          !users.length
            ? <Preloader size="large" color="#28a996" fullScreen />
            : <FlatList
               data={ users }
               keyExtractor={ this._keyExtractor }
               renderItem={ this._renderItem }
               ListHeaderComponent={ this._renderHeader }
               numColumns={2}
            />
        }
      </View>
    )
  }
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addBirthdayView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  addBirthdayText: {
    color: theme.primaryColor,
    marginTop: 10,
    fontWeight: 'bold'
  },
  headerContainer: {
    height: 35,
    padding: 10,
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 15,
    color: '#95a5a6',
    fontWeight: 'bold'
  }
})
