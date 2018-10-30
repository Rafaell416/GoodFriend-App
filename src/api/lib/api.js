'use strict'

class Api {
  constructor(config){
    this.config = config
  }

  async getUsers () {
    try {
      const response = await fetch( this.config.api.endpoint )
      const data = await response.json()
      return data.data
    } catch (e) {
      this._handleError('There was an error at getBirthdays', e)
    }
  }

  async createBirthday (user) {
    try {
      const { first_name, last_name, birthday } = user
      const response =  await fetch( this.config.api.endpoint , {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name,
          last_name,
          birthday,
          avatar: this.config.mock.staticAvatar
        }),
      })

      const data = await response.json()
      return data
    } catch (e) {
      this._handleError('There was an error at createBirthday', e)
    }
  }

  async deleteBirthday (uid) {
    try {
      const response = await fetch( `${this.config.api.endpoint}/${uid}`, {
        method: 'DELETE'
      })
      return response
    } catch (e) {
      this._handleError('There was an error at deleteBirthday', e)
    }
  }

  updateBirthday () {

  }

  _handleError (msg, error) {
    console.warn(`${msg}: ${error}`)
    return error
  }

}

export default Api
