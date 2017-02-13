const initialState = require('../../state')
module.exports = function plan (state = initialState.group, action) {

  switch (action.type) {
    case 'UPDATE_GROUP':
      // warning - test this is not mutating state -
      // - watch for view not updating when it should
      const newState = Object.assign({}, state, action.payload)
      newState.step += 1
      return newState

    case 'GROUP_STEP_BACK':
      state -= action.payload
      return state

    default:
      return state
  }
}
