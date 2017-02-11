const React = require('react')
const { connect } = require('react-redux')
const MeetingPoint = require('../components/meetingPoint')
const ButOutInventory = require('../components/bugOutInventory')

function Plan (props) {
  return (
    <div>
      <h1>This is the User Plan Component </h1>
      <MeetingPoint router={props.router} />
    </div>
  )
}

module.exports = connect((state) => state)(CreatePlan)
