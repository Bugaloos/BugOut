const { combineReducers } = require('redux')
const authErr = require('./authErr')
const loggedIn = require('./loggedIn')

module.exports = combineReducers({
  authErr,
  loggedIn
})
