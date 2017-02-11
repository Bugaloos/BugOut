module.exports = function messages (state = null, action) {
  switch (action.type) {

    case 'UPDATE_MESSAGES':
      state = action.payload
      return state

    default:
      return state
  }
}
