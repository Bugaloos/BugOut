module.exports = function planComplete (state = false, action) {
  switch (action.type) {

    case 'CURRENT_PLAN_STAGE':
      state = action.payload
      return state

    default:
      return state
  }
}
