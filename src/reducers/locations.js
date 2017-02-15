const initialState = require('../../state')
module.exports = function loggedIn (state = initialState.locations, action) {
  switch (action.type) {
    case 'UPDATE_PLAN_LOCATIONS':
      return Object.assign({}, state, {
        safePoint: action.payload.safePoint,
        meetingPoint: action.payload.meetingPoint,
      })

    default:
      return state
  }
}

// ToDO: cache location payload
