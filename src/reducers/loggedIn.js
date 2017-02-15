const initialState = require('../../state')
module.exports = function loggedIn (state = null, action) {
  switch (action.type) {

    case 'LOG_IN':
      return action.payload

    case 'LOG_OUT':
      return initialState.loggedIn

    default:
      return state
  }
}
