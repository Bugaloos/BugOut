module.exports = function loggedIn (state = null, action) {
  switch (action.type) {

    case 'LOG_IN':
      return action.payload

    default:
      return state
  }
}
