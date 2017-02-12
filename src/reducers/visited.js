module.exports = function visited (state = null, action) {
  switch (action.type) {

    case 'UPDATE_VISITED':
      state = state.concat(action.payload)
      return state

    default:
      return state
  }
}
