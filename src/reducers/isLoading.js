const initialState = require('../../state')
module.exports = function isLoading (state = initialState.isLoading, action) {
  switch (action.type) {

    case 'LOAD_START':
      return true

    case 'LOAD_END':
      return false

    default:
      return state
  }
}
