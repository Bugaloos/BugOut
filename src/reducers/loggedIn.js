module.exports = function loggedIn (state = null, action) {
  switch (action.type) {

    case 'LOG_IN':
      return action.payload

    case 'LOG_OUT':
      return state
      
    default:
      return state
  }
}
