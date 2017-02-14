const initialState = require('../../state')
module.exports = function group (state = initialState.group, action) {

  switch (action.type) {
    case 'UPDATE_GROUP_NAME':
      // warning - test this is not mutating state -
      // - watch for view not updating when it should
      return Object.assign({}, state, {
        step: state.step + 1,
        name: action.payload
      })

    case 'TOGGLE_GROUP_ITEM':
      return {...state,
        inventory: state.plan.inventory.map((item) => {
          if (item.name === action.payload) {
            return {...item, checked: !item.checked}
          }
          return item
        })
      }

    case 'UPDATE_GROUP_LOCATIONS':
      return Object.assign({}, state, {
        safePoint: action.payload.safePoint,
        meetingPoint: action.payload.meetingPoint,
        step: state.step + 1
      })

    case 'GROUP_STEP_BACK':
      return Object.assign({}, state, {state: state.step - 1})

    default:
      return state
  }
}
