'use strict'
import options from '../../../config'

class Api {
  construtor( config ){
    this.config = config || options
  }

  async getUsers () {
    try {
      const response = await fetch('https://reqres.in/api/users')
      const data = await response.json()
      return data.data
    } catch (e) {
      _handleError('There was an error at getBirthdays', e)
    }
  }

  createBirthday () {

  }

  deleteBirthday () {

  }

  updateBirthday () {

  }

  _handleError (msg, error) {
    console.warn(`${msg}: ${error}`)
    return error
  }

}

export default Api
