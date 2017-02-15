const { combineReducers } = require('redux')
const authErr = require('./authErr')
const error = require('./error')
const group = require('./group')
const groupPlan = require('./groupPlan')
const loggedIn = require('./loggedIn')
const messages = require('./messages')
const userPlan = require('./userPlan')
const showingComponent = require('./showingComponent')
const isLoading = require('./isLoading')


module.exports = combineReducers({
  isLoading,
  authErr,
  error,
  group,
  groupPlan,
  loggedIn,
  messages,
  showingComponent,
  userPlan
})
