const initialState = require('../../state')
module.exports = function authErr (state = null, action) {
  switch (action.type) {

    case 'UPDATE_USER_CACHE':
      state = action.payload
      return state

    case 'LOG_OUT':
      return initialState

    default:
      return state
  }
}
