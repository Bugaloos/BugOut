const initialState = require('../../state')
module.exports = function plan (state = initialState.plan, action) {
  switch (action.type) {

    case 'UPDATE_INVENTORY':
      state.inventory = action.payload
      return state

    case 'TOGGLE_ITEM':
      return {...state,
        inventory: state.inventory.map((item) => {
          if (item.name === action.payload) {
            return {...item, checked: !item.checked}
          }
          return item
        })
      }
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
