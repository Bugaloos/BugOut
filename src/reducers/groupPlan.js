const initialState = require('../../state')
module.exports = function group (state = initialState.groupPlan, action) {

  switch (action.type) {
    case 'TOGGLE_GROUP_ITEM':
      return {...state,
        inventory: state.inventory.map((item) => {
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

    default:
      return state
  }
}
