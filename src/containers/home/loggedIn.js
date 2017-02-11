const React = require('react')
const { connect } = require('react-redux')

// This component will show plans and groups based upon a userID
function Profile (props) {
  const loggedIn = props.loggedIn
  return (
    <div>
      <h1>Welcome {loggedIn}!</h1>
    </div>
  )
}

module.exports = connect((state) => state)(Profile)
