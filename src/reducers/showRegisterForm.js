module.exports = function showRegisterForm (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_REGISTER_FORM':
      return !state

    case 'LOG_OUT':
      return state
      
    default:
      return state
  }
}
