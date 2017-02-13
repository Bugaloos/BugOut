module.exports = function showRegisterForm (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_REGISTER_FORM':
      return !state

    default:
      return state
  }
}
