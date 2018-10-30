import React from 'react'
import {
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native'
import PropTypes from 'prop-types'

function Preloader ({ color, size, fullScreen }) {
  return (
    <View style={ fullScreen ? styles.fullScreen : null }>
       <ActivityIndicator size={size} color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

Preloader.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  fullScreen: PropTypes.bool
}

export default Preloader
