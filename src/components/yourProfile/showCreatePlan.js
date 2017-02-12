const React = require('react')
const { connect } = require('react-redux')
const CreatePlanStepper = require('./createPlanStepper')

// This component will show plans and groups based upon a userID
function ShowCreatePlan (props) {
  const createPlanButton =
    <button onClick={() => props.dispatch({type: 'TOGGLE_CREATE_PLAN'})}>Create A Plan</button>

  return props.showCreatePlan
    ? <CreatePlanStepper {...props} />
    : createPlanButton
}

module.exports = connect((state) => state)(ShowCreatePlan)

// (props.planComplete
//   ? <CompleteProfile {...props} />
// :
