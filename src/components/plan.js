const React = require('react')
const { connect } = require('react-redux')

// This component will return a specific plan based upon the userID or groupID which it recives

function Plan (props) {
  return (
    <div>
      <h3>This is the Plan Component </h3>
    </div>
  )
}

module.exports = connect((state) => state)(Plan)
