const { combineReducers } = require('redux')
const showRegisterForm = require('./showRegisterForm')
const showLoginForm = require('./showLoginForm')

module.exports = combineReducers({
  showRegisterForm,
  showLoginForm
})
