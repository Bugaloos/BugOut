const React = require('react')
const { connect } = require('react-redux')
const Group = require('../groups')
const Plan = require('../plan')
const OfflineDetails = require('../offlineDetails')
// This component will show plans and groups based upon a userID
function CompleteProfile (props) {
  return (
    <div>
      <div className='onTheLeft'>
        <h2>Your Plans</h2>
        <Plan {...props} />
      </div>
      <div className='onTheRight'>
        <h2>Your Groups</h2>
        <Group {...props} />
      </div>
      <div className='goBelow'>
        <OfflineDetails />
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(CompleteProfile)
