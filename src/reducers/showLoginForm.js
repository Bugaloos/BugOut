const initialState = require('../../state')
module.exports = function showLoginForm (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_LOGIN_FORM':
      return !state

    case 'LOG_OUT':
      return initialState.showLoginForm

    default:
      return state
  }
}
