const initialState = require('../../state')
module.exports = function group (state = initialState.group, action) {

  switch (action.type) {
    case 'PROPOSED_GROUP_NAME':
      // warning - test this is not mutating state -
      // - watch for view not updating when it should
      return Object.assign({}, state, {
        step: state.step + 1,
        proposedGroupName: action.payload
      })

    case 'GROUP_BACK':
      return Object.assign({}, state, {step: state.step - 1})

    case 'GROUP_FORWARD':
      return Object.assign({}, state, {step: state.step + 1})


    case 'LOG_OUT':
      return initialState.group

    default:
      return state
  }
}
