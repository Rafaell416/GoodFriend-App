import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import PropTypes from 'prop-types'
const AVATAR_SIZE = 70

function UserItem ({ avatar, first_name, last_name, birthday }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarView}>
        <Image source={{ uri: avatar }} style={styles.avatar} fadeDuration={0} />
      </View>
      <View style={styles.fullNameView}>
        <Text style={styles.name}>{ first_name }</Text>
        <Text style={styles.name}>{ last_name }</Text>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.birthdayTextView}>
        <Text style={styles.birthdayText}>{ birthday }</Text>
      </View>
    </View>
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
    padding: 10
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
    color: '#28a996'
  },
  separator: {
    height: 3,
    backgroundColor: '#ff9234',
    width: '100%',
    borderRadius: 5
  },
  birthdayTextView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#28a996',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  birthdayText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  }
})

UserItem.propTypes = {
  avatar: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  birthday: PropTypes.string
}

export default UserItem