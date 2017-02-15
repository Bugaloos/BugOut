const initialState = require('../../state')
module.exports = function formShowing (state = null, action) {
  switch (action.type) {

    case 'ENTRY_SHOWING':
      return action.payload
      
    default:
      return state
  }
}
