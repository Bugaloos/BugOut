module.exports = function planComplete (state = null, action) {
  switch (action.type) {

    case 'STEP':
      state += action.payload
      return state

    default:
      return state
  }
}
