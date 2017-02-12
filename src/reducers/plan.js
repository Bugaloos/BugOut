module.exports = function plan (state = null, action) {
  switch (action.type) {

    case 'UPDATE_INVENTORY':
      state.inventory = action.payload
      return state

    default:
      return state
  }
}
