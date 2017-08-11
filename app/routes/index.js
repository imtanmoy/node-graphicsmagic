'use strict'

const coreApi = require('./core.routes')

module.exports = (app) => {
    app.use(coreApi)
}