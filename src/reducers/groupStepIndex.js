module.exports = function groupStepIndex (state = 0, action) {
  switch (action.type) {

    case 'GROUP_STEP_FORWARD':
      state += action.payload
      return state

    case 'GROUP_STEP_BACK':
      state -= action.payload
      return state

    default:
      return state
  }
}
