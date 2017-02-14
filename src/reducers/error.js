const initialState = require('../../state')
module.exports = function error (state = null, action) {
  switch (action.type) {

    case 'ERROR_ERR':
      state = action.payload
      return state

    case 'LOG_OUT':
      return initialState.error

    default:
      return state
  }
}
