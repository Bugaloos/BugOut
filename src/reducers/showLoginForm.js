module.exports = function online (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_LOGIN_FORM':
      return !state.showLoginForm

    default:
      return state
  }
}
