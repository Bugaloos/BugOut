module.exports = function showCreateGroup (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_CREATE_GROUP':
      return !state
    default:
      return state
  }
}
