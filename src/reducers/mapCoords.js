const initialState = require('../../state')
module.exports = function mapCoords (state = initialState.locations, action) {
  switch (action.type) {
    case 'RETURN_COORDS':
      return: state.geometry.locations;

    default:
      return state
  }
}
