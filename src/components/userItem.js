import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'
import { Feather } from '@expo/vector-icons'
import { theme } from '../utils'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu'

const AVATAR_SIZE = 60


function UserItem ({ avatar, first_name, last_name, birthday, id, handleDeleteBirthday, handleUpdateBirthday, handleNavigateToScreen }) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => handleNavigateToScreen({ 
        screen: 'UserDetail', 
        params: {
          user: { avatar, first_name, last_name, birthday, id }
        }
      })}
    >
      <View style={styles.avatarView}>
        <Image source={{ uri: avatar }} style={styles.avatar} fadeDuration={0} />
        <View style={styles.moreView}>
          <Menu>
            <MenuTrigger>
              <Feather name="more-vertical" size={20} color={theme.primaryColor}/>
            </MenuTrigger>
            <MenuOptions>
              <MenuOption value={1} text="Delete" onSelect={() => handleDeleteBirthday(id) }/>
              <MenuOption value={2} text="Edit" onSelect={() => handleUpdateBirthday({ first_name, last_name, birthday, id, avatar })}/>
            </MenuOptions>
          </Menu>
        </View>
      </View>
      <View style={styles.fullNameView}>
        <Text style={styles.name}>{ first_name }</Text>
        <Text style={styles.name}>{ last_name }</Text>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.birthdayTextView}>
        <Text style={styles.birthdayText}>{ birthday }</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  avatarView: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  avatar: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 1
  },
  fullNameView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 5,
    color: theme.primaryColor
  },
  separator: {
    height: 3,
    backgroundColor: theme.orange,
    width: '100%',
    borderRadius: 5
  },
  birthdayTextView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.primaryColor,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  birthdayText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  },
  moreView: {
    position: 'absolute',
    top: 0,
    right: 0
  }
})

UserItem.propTypes = {
  avatar: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  birthday: PropTypes.string
}

export default UserItem
