module.exports = function online (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_JOIN_GROUP':
      return !state.showJoinGroup

    default:
      return state
  }
}
