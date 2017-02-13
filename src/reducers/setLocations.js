module.exports = function setLocations (state = {meetingPoint: '', safePoint: ''}, action) {
  switch (action.type) {

    case 'ADD_LOCATIONS':
      state.safePoint += action.payload.safePoint
      state.meetingPoint += action.payload.meetingPoint
      return state

    default:
      return state
  }
}
