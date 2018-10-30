import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { Feather } from '@expo/vector-icons'

import { formatDate } from '../utils'

export default class DatePicker extends Component {
  state = {
    isDateTimePickerVisible: false,
    selected: false,
    initialText: 'Pick birthday'
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true })

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false })

  _handleDatePicked = (date) => {
     const formatedDate = formatDate( date )
     this.setState({ date: formatedDate, selected: true })
     this._hideDateTimePicker()
     this.props.handleOnDatePicked( formatedDate )
   }

  render () {
    const { selected, initialText } = this.state
    const { value } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.iconView}>
          <Feather name="calendar" size={30} color="#28a996"/>
        </View>
        <View style={styles.inputView}>
          <TouchableOpacity style={styles.dateView} onPress={ this._showDateTimePicker }>
            {
              value
                ? <Text style={styles.dateText}>{ value }</Text>
                : <Text style={styles.initialText}>{ initialText }</Text>
            }
          </TouchableOpacity>
        </View>
        <DateTimePicker
          isVisible={ this.state.isDateTimePickerVisible }
          onConfirm={ this._handleDatePicked }
          onCancel={ this._hideDateTimePicker }
          mode='date'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    height: 75,
    paddingRight: 10
  },
  iconView: {
    height: 75,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  inputView: {
    flex: 1,
    paddingBottom: 10,
    paddingTop: 10,
  },
  dateView: {
    flex: 1,
    backgroundColor: '#ECF0F1',
    borderRadius: 8,
    justifyContent: 'center',
    padding: 5
  },
  initialText: {
    color: '#c8cbcb',
    fontSize: 14
  },
  dateText: {
    fontSize: 14
  }
})
