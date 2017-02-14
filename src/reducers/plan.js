const initialState = require('../../state')
module.exports = function plan (state = initialState.plan, action) {
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

    default:
      return state
  }
}

// case TOGGLE_TODO:
//   return Object.assign({}, state, {
//     todos: state.todos.map((todo, index) => {
//       if (index === action.index) {
//         return Object.assign({}, todo, {
//           completed: !todo.completed
//         })
//       }
//       return todo
//     })
//   })
