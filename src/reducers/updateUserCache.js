module.exports = function authErr (state = null, action) {
  switch (action.type) {

    case 'UPDATE_USER_CACHE':
      state = action.payload
      return state

    default:
      return state
  }
}