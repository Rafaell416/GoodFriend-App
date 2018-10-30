import React from 'react'
import AppNavigation from './src/navigation'


export default class App extends React.Component {
  componentWillMount () {
    console.disableYellowBox = true
  }

  render() {
    return <AppNavigation />
  }
}
