const initialState = require('../../state')
module.exports = function plan (state = initialState.plan, action) {
  switch (action.type) {

    case 'SHOWING_COMPONENT':
      state = action.payload
      return state

    default:
      return state
  }
}
