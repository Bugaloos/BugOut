const { combineReducers } = require('redux')
const showRegisterForm = require('./showRegisterForm')
const showLoginForm = require('./showLoginForm')
const authErr = require('./authErr')
const loggedIn = require('./loggedIn')
const messages = require('./messages')
const group = require('./group')
const planComplete = require('./planComplete')
const stepIndex = require('./stepIndex')
const plan = require('./plan')


module.exports = combineReducers({
  showRegisterForm,
  showLoginForm,
  authErr,
  loggedIn,
  messages,
  group,
  planComplete,
  stepIndex,
  plan

})
