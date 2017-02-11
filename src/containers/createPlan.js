const React = require('react')
const { connect } = require('react-redux')
const MeetingPoint = require('../components/meetingPoint')
const BugOutInventory = require('../components/bugOutInventory')

function CreatePlan (props) {
  return (
    <div>
      <h1>User Plan</h1>
      <MeetingPoint router={props.router} />
      <BugOutInventory router={props.router} />
      <button>Submit</button>
    </div>
  )
}

module.exports = connect((state) => state)(CreatePlan)
