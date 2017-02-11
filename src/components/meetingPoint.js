const React = require('react')
const { connect } = require('react-redux')

function Plan (props) {
  return (
    <div>
      <h1>This is the meeting point Component </h1>
    </div>
  )
}

module.exports = connect((state) => state)(MeetingPoint)
