const initialState = require('../../state')
module.exports = function showingComponent (state = initialState.showingComponent, action) {
  switch (action.type) {

    case 'SHOWING_COMPONENT':
      state = action.payload
      return state

    default:
      return state
  }
}
