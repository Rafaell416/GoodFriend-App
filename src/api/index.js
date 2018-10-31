'use strict'

import Api from './lib/api'
import config from '../../config'

let apiInstance = null

function createClient ( conf ) {
  if (!apiInstance) {
    apiInstance = new Api( conf )
  }
  return apiInstance
}

const api = createClient( config )

export default api
