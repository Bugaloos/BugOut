module.exports = function showLoginForm (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_LOGIN_FORM':
      return !state

    default:
      return state
  }
}
