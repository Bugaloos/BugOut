const initialState = require('../../state')
module.exports = function userPlan (state = initialState.userPlan, action) {
  switch (action.type) {

    case 'TOGGLE_PLAN_ITEM':
      return {...state,
        inventory: state.inventory.map((item) => {
          if (item.name === action.payload) {
            return {...item, checked: !item.checked}
          }
          return item
        })
      }
    case 'UPDATE_PLAN_LOCATIONS':
      return Object.assign({}, state, {
        safePoint: action.payload.safePoint,
        meetingPoint: action.payload.meetingPoint,
        step: state.step + 1
      })

    case 'PLAN_BACK':
      return Object.assign({}, state, {step: state.step - 1})

    default:
      return state
  }
}
