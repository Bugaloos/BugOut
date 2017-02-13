module.exports = function authErr (state = null, action) {
  switch (action.type) {

    case 'AUTH_ERR':
      state = action.payload
      return state

    default:
      return state
  }
}
