const { combineReducers } = require('redux')
const showRegisterForm = require('./showRegisterForm')
const showLoginForm = require('./showLoginForm')
const authErr = require('./authErr')
const loggedIn = require('./loggedIn')

module.exports = combineReducers({
  showRegisterForm,
  showLoginForm,
  authErr,
  loggedIn

})
