const initialState = require('../../state')
module.exports = function showingUserAdded (state = initialState.showingUserAdded, action) {
  switch (action.type) {

    case 'SHOW_USER_ADDED':
    console.log('Show User Added Reducer')
      state = action.payload
      return state

    default:
      return state
  }
}
