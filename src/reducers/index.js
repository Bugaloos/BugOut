const { combineReducers } = require('redux')
const authErr = require('./authErr')
const error = require('./error')
const group = require('./group')
const loggedIn = require('./loggedIn')
const messages = require('./messages')
const plan = require('./plan')
const setLocations = require('./setLocations')
const showingComponent = require('./showingComponent')
const showRegisterForm = require('./showRegisterForm')
const showLoginForm = require('./showLoginForm')


module.exports = combineReducers({
  authErr,
  error,
  group,
  loggedIn,
  messages,
  plan,
  setLocations,
  showingComponent,
  showLoginForm,
  showRegisterForm
})
