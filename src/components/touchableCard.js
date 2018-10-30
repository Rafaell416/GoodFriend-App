import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

const { width } = Dimensions.get('window')
const CARD_SIZE = width / 2

function TouchableCard ({ children, actionToExecute, disabled }) {
  return (
    <TouchableOpacity onPress={actionToExecute} disabled={disabled} style={styles.container}>
      <View style={styles.card}>
        { children }
      </View>
    </TouchableOpacity>
  )
}

TouchableCard.propTypes = {
  children: PropTypes.element,
  actionButton: PropTypes.func,
  disabled: PropTypes.bool
}

const styles = StyleSheet.create({
  container: {
    width: CARD_SIZE,
    height: CARD_SIZE,
    backgroundColor: 'transparent',
    padding: 10
  },
  card: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    elevation: 4,
    overflow: 'hidden'
  }
})

export default TouchableCard
