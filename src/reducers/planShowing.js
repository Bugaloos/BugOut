const initialState = require('../../state')
module.exports = function planShowing (state = false, action) {
  switch (action.type) {

    case 'PLAN_SHOWING':
      return !state

    default:
      return state
  }
}
