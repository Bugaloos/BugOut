const initialState = require('../../state')
module.exports = function mapCoords (state = initialState.locations, action) {
  switch (action.type) {
    case 'RETURN_COORDS':
      return: state.geometry.locations;

    case 'LOG_OUT':
        return initialState.locations
        
    default:
      return state
  }
}
