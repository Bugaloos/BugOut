const React = require('react')
const { connect } = require('react-redux')
const Group = require('../groups')
const Plan = require('../plan')

// This component will show plans and groups based upon a userID
function CompleteProfile (props) {
  const { group } = props
  return (
    <div>
      <div>
        <h2>Your Plans</h2>
        <Plan />
      </div>
      <div>
        <h2>Your Groups</h2>
        < Group group={group} />
      </div>
    </div>
  )
}

module.exports = CompleteProfile
