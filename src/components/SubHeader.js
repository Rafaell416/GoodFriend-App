import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Feather from '@expo/vector-icons/Feather'

function SubHeader ({ icon, text, color, size }) {
  return (
    <View style={styles.container}>
      <Feather name={icon} size={size} color={color} />
      <Text style={[styles.text, { fontSize: size, color: color }]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  text: {
    fontWeight: 'bold',
    marginLeft: 10
  }
})

export default SubHeader