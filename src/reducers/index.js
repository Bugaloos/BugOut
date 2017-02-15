const { combineReducers } = require('redux')
const authErr = require('./authErr')
const error = require('./error')
const formShowing = require('./formShowing')
const group = require('./group')
const groupPlan = require('./groupPlan')
const loggedIn = require('./loggedIn')
const messages = require('./messages')
const userPlan = require('./userPlan')
const showingComponent = require('./showingComponent')
const planShowing = require('./planShowing')

module.exports = combineReducers({
  authErr,
  error,
  formShowing,
  group,
  groupPlan,
  loggedIn,
  messages,
  showingComponent,
  userPlan,
  planShowing
})
