const { combineReducers } = require('redux')
const authErr = require('./authErr')
const error = require('./error')
const group = require('./group')
const loggedIn = require('./loggedIn')
const messages = require('./messages')
const plan = require('./plan')
const showingComponent = require('./showingComponent')
const showRegisterForm = require('./showRegisterForm')
const showLoginForm = require('./showLoginForm')
// const showJoinGroup = require('./showJoinGroup')
const locations = require('./locations')


module.exports = combineReducers({
  authErr,
  error,
  group,
  loggedIn,
  messages,
  plan,
  showingComponent,
  showLoginForm,
  showRegisterForm,
  // showJoinGroup,
  locations

})
