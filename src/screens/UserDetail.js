import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image
} from 'react-native'
import SubHeader from '../components/SubHeader'
import { theme } from '../utils'

const AVATAR_SIZE = 150
const AVATAR_VIEW_SIZE = AVATAR_SIZE + 10

export default class UserDetail extends Component {

  render () {
    const { first_name, last_name, avatar, birthday } = this.props.navigation.state.params.user
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
          <View style={styles.avatarView}>
            <Image source={{ uri: avatar }} style={styles.avatar} fadeDuration={0} />
          </View>
          <SubHeader 
            text={ `${first_name} ${last_name}` }
            size={25}
            color="white"
          />
          <SubHeader 
            text={birthday}
            size={22}
            color="white"
            icon="calendar"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.primaryColor
  },
  avatar: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2
  },
  avatarView: {
    height: AVATAR_VIEW_SIZE,
    width: AVATAR_VIEW_SIZE,
    borderRadius: AVATAR_VIEW_SIZE / 2,
    backgroundColor: theme.orange,
    alignItems: 'center',
    justifyContent: 'center'
  }
})