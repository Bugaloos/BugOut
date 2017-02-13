const React = require('react')
const { connect } = require('react-redux')
const MeetingPoint = require('../components/meetingPoint')
const BugOutInventory = require('../components/yourProfile/inventory')

function CreatePlan (props) {
  return (
    <div>
      <h1>User Plan</h1>
      <BugOutInventory router={props.router} />
      <MeetingPoint router={props.router} />
    </div>
  )
}

module.exports = connect((state) => state)(CreatePlan)
