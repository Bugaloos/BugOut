module.exports = function authErr (state = null, action) {
  switch (action.type) {

    case 'AUTH_ERR':
      return action.payload

    case 'LOG_OUT':
        return state

    default:
      return state
  }
}
