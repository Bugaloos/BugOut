module.exports = function showCreatePlan (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_CREATE_PLAN':
      return !state

    default:
      return state
  }
}
