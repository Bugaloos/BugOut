module.exports = function messages (state = [], action) {
  switch (action.type) {

    case 'UPDATE_MESSAGES':
      state = action.payload
      return state

    case 'LOG_OUT':
      return state

    default:
      return state
  }
}
