const React = require('react')
const { connect } = require('react-redux')

// This component will show plans and groups based upon a userID
function Profile (props) {
  return (
    <div>
      <h1>This is the Profile container component</h1>
    </div>
  )
}

module.exports = connect((state) => state)(Profile)
