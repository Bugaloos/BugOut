module.exports = function online (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_CREATE_GROUP':
      return !state.showCreateGroup
    default:
      return state
  }
}
