const initialState = require('../../state')
module.exports = function authErr (state = null, action) {
  switch (action.type) {

    case 'AUTH_ERR':
      return action.payload

    case 'LOG_OUT':
        return initialState.authErr

    default:
      return state
  }
}
