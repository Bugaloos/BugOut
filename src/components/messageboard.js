const React = require('react')
const { connect } = require('react-redux')

// This compenent will require a group ID, and based upon this will search for all messages that have been posted to the group with that id

function Messageboard (props) {
  return (
    <div>
      <h1>This is the container Messageboard component</h1>
    </div>
  )
}

module.exports = connect((state) => state)(Messageboard)
