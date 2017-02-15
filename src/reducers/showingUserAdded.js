const initialState = require('../../state')
module.exports = function showingUserAdded (state = initialState.showingUserAdded, action) {
  switch (action.type) {

    case 'SHOW_USER_ADDED':
    console.log('Show User Added Reducer')
      state = action.payload
      return state

    case 'LOG_OUT':
        return initialState.showingUserAdded

    default:
      return state
  }
}
