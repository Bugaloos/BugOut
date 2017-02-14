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
const loggedOut = require('./loggedOut')



module.exports = combineReducers({
  authErr,
  error,
  group,
  loggedIn,
  loggedOut,
  messages,
  plan,
  showingComponent,
  showLoginForm,
  showRegisterForm
})

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = initialState
    console.log(initialState);
  }

  return appReducer(state, action)
}
