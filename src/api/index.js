'use strict'

import Api from './lib/api'

let api = null

const createClient = ( config ) => !api ? api = new Api( config ) : api
export default createClient
