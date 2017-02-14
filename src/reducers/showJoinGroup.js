module.exports = function showJoinGroup (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_JOIN_GROUP':
      return !state

    case 'LOG_OUT':
      return state

    default:
      return state
  }
}
