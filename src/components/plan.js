const React = require('react')
const { connect } = require('react-redux')

// This component will return a specific plan based upon the userID or groupID which it recives

function Plan (props) {
  return (
    <div>
      <h1>This is the Plan Component </h1>
    </div>
  )
}

module.exports = connect((state) => state)(Plan)
