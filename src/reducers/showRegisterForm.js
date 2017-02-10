module.exports = function online (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_REGISTER_FORM':
      return !state.showRegisterForm

    default:
      return state
  }
}
