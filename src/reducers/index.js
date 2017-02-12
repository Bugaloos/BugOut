const { combineReducers } = require('redux')
const authErr = require('./authErr')
const group = require('./group')
const loggedIn = require('./loggedIn')
const messages = require('./messages')
const planComplete = require('./planComplete')
const showRegisterForm = require('./showRegisterForm')
const showLoginForm = require('./showLoginForm')
const showCreateGroup = require('./showCreateGroup')
const showCreatePlan = require('./showCreatePlan')
const showJoinGroup = require('./showJoinGroup')
const stepIndex = require('./stepIndex')
const visited = require('./visited')

module.exports = combineReducers({
  authErr,
  group,
  loggedIn,
  messages,
  planComplete,
  showLoginForm,
  showRegisterForm,
  showCreateGroup,
  showCreatePlan,
  showJoinGroup,
  stepIndex,
  visited
})
