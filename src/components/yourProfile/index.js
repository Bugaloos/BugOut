const React = require('react')
const { connect } = require('react-redux')
const Group = require ('../groups')
const Plan = require ('../plan')
const Stepper = require ('./stepper')
const Inventory = require ('./inventory')

// This component will show plans and groups based upon a userID
function Profile (props) {
  return (
    <div>
      <Inventory {...props} />
    </div>

  )
}

module.exports = connect((state) => state)(Profile)

// (props.planComplete
//   ? <CompleteProfile {...props} />
// :
