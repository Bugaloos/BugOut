const initialState = require('../../state')
module.exports = function plan (state = initialState.group, action) {

  switch (action.type) {
    case 'UPDATE_GROUP_NAME':
      // warning - test this is not mutating state -
      // - watch for view not updating when it should
      return Object.assign({}, state, {
        step: state.step + 1,
        name: action.payload
      })

    case 'UPDATE_GROUP_LOCATIONS':
      return Object.assign({}, state, {
        safePoint: action.payload.safePoint,
        meetingPoint: action.payload.meetingPoint,
        step: state.step + 1
      })

    case 'GROUP_STEP_BACK':
      return Object.assign({}, state, {state: state.step - 1})


    case 'LOG_OUT':
      return initialState.group

    default:
      return state
  }
}
