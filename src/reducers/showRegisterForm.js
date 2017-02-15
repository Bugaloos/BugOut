const initialState = require('../../state')
module.exports = function showRegisterForm (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_REGISTER_FORM':
      return !state

    case 'LOG_OUT':
      return initialState.showRegisterForm

    default:
      return state
  }
}
