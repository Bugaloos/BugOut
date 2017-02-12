module.exports = function stepIndex (state = null, action) {
  switch (action.type) {

    case 'STEP_FORWARD':
      state += action.payload
      return state

    case 'STEP_BACK':
      state -= action.payload
      return state

    default:
      return state
  }
}
