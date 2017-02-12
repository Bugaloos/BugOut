module.exports = function stepIndex (state = null, action) {
  switch (action.type) {

    case 'STEP':
      state += action.payload
      return state

    default:
      return state
  }
}
