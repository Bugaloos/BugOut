module.exports = function error (state = null, action) {
  switch (action.type) {

    case 'ERROR_ERR':
      state = action.payload
      return state

    default:
      return state
  }
}
