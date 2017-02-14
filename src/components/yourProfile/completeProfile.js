const React = require('react')
const { connect } = require('react-redux')
const Group = require('../groups')
const Plan = require('../plan')
const OfflineDetails = require('../offlineDetails')
// This component will show plans and groups based upon a userID
function CompleteProfile (props) {
  return (
    <div>
      <div>
        <h2>Your Plans</h2>
        <Plan {...props} />
      </div>
      <div>
        <h2>Your Groups</h2>
        <Group {...props} />
      </div>
      <div>
        <OfflineDetails />
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(CompleteProfile)
