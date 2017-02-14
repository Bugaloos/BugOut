const React = require('react')
const handlePrev = require('./handlePrev')

module.exports = function backButton (showingComponent, planStep, groupStep, dispatch) {
  if (showingComponent === 'CREATE_PLAN') {
    return planStep > 0
    ? <button onClick={() => { handlePrev(showingComponent, dispatch) }}>Back</button>
    : <div />
  } else if (showingComponent === 'CREATE_GROUP') {
    return groupStep > 0
  ? <button onClick={() => { handlePrev(showingComponent, dispatch) }}>Back</button>
  : <div />
  }
}
