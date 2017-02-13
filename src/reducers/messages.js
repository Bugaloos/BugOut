module.exports = function messages (state = [], action) {
  switch (action.type) {

    case 'UPDATE_MESSAGES':
      state = action.payload
      return state

    default:
      return state
  }
}
