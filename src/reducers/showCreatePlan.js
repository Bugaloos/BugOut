module.exports = function online (state = false, action) {
  switch (action.type) {

    case 'TOGGLE_CREATE_PLAN':
      return !state.showCreatePlan

    default:
      return state
  }
}
