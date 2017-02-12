const { combineReducers } = require('redux')
const authErr = require('./authErr')
const group = require('./group')
const setLocations = require('./setLocations')
const loggedIn = require('./loggedIn')
const messages = require('./messages')
const planComplete = require('./planComplete')
const showRegisterForm = require('./showRegisterForm')
const showLoginForm = require('./showLoginForm')
const showCreateGroup = require('./showCreateGroup')
const showCreatePlan = require('./showCreatePlan')
const showJoinGroup = require('./showJoinGroup')
const stepIndex = require('./stepIndex')

module.exports = combineReducers({
  authErr,
  group,
  setLocations,
  loggedIn,
  messages,
  planComplete,
  showLoginForm,
  showRegisterForm,
  showCreateGroup,
  showCreatePlan,
  showJoinGroup,
  stepIndex
})
