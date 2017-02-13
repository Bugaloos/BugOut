module.exports = function planStepIndex (state = 0, action) {
  switch (action.type) {

    case 'PLAN_STEP_FORWARD':
      state += action.payload
      return state

    case 'PLAN_STEP_BACK':
      state -= action.payload
      return state

    default:
      return state
  }
}
