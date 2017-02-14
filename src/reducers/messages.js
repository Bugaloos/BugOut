const initialState = require('../../state')
module.exports = function messages (state = [], action) {
  switch (action.type) {

    case 'UPDATE_MESSAGES':
      state = action.payload
      return state

    case 'LOG_OUT':
      return initialState.messages

    default:
      return state
  }
}
