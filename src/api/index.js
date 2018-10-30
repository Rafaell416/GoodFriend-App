'use strict'

import Api from './lib/api'

const createClient = ( config ) => new Api( config )
export default createClient
