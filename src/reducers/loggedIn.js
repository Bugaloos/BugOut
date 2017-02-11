module.exports = function loggedIn (state = null, action) {
  switch (action.type) {

    case 'LOG_IN':
      state = action.payload
      return state

    default:
      return state
  }
}
