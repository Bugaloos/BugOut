const initialState = require('../../state')
module.exports = function loggedIn (state = initialState.locations, action) {
  switch (action.type) {
    case 'UPDATE_PLAN_LOCATIONS':
      return Object.assign({}, state, {
        safePoint: action.payload.safePoint,
        meetingPoint: action.payload.meetingPoint,
      })

      case 'LOG_OUT':
          return initialState.locations

    default:
      return state
  }
}

// ToDO: cache location payload
