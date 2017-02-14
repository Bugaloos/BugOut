const { combineReducers } = require('redux')
const authErr = require('./authErr')
const error = require('./error')
const group = require('./group')
const groupPlan = require('./groupPlan')
const loggedIn = require('./loggedIn')
const messages = require('./messages')
const userPlan = require('./userPlan')
const showingComponent = require('./showingComponent')
const showRegisterForm = require('./showRegisterForm')
const showLoginForm = require('./showLoginForm')




module.exports = combineReducers({
  authErr,
  error,
  group,
  groupPlan,
  loggedIn,
  messages,
  showingComponent,
  showLoginForm,
  showRegisterForm,
  userPlan
})

// const rootReducer = (state, action) => {
//   if (action.type === 'LOG_OUT') {
//     state = undefined
//   }
//
//   return appReducer(state, action)
// }
