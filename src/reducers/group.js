const initialState = require('../../state')
module.exports = function plan (state = initialState.group, action) {

  switch (action.type) {
    case 'PROPOSED_GROUP_NAME':
      // warning - test this is not mutating state -
      // - watch for view not updating when it should
      return Object.assign({}, state, {
        step: state.step + 1,
        proposedGroupName: action.payload
      })
    case 'TOGGLE_GROUP_ITEM':
      return {...state,
        inventory: state.userplan.inventory.map((item) => {
          if (item.name === action.payload) {
            return {...item, checked: !item.checked}
          }
          return item
        })
      }
    case 'UPDATE_GROUP_LOCATIONS':
      console.log(state, action.payload);
      return Object.assign({}, state, {
        safePoint: action.payload.safePoint,
        meetingPoint: action.payload.meetingPoint,
        step: state.step + 1
      })

    case 'GROUP_BACK':
      return Object.assign({}, state, {step: state.step - 1})

    default:
      return state
  }
}
