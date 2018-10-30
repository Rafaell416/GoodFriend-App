import React from 'react'
import AppNavigation from './src/navigation'
import { MenuProvider } from 'react-native-popup-menu'

export default class App extends React.Component {
  componentWillMount () {
    console.disableYellowBox = true
  }

  render() {
    return (
      <MenuProvider>
        <AppNavigation />
      </MenuProvider>
    )
  }
}
