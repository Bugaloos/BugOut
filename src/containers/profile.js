const React = require('react')
const { connect } = require('react-redux')
const Group = require ('../components/groups')
const Plan = require ('../components/plan')
const YourProfile = require ('../components/yourProfile')

// This component will show plans and groups based upon a userID
function Profile (props) {
  return (
    <div>
      <h1>Welcome {props.loggedIn}!</h1>
      <YourProfile {...props} />
    </div>

  )
}

module.exports = connect((state) => state)(Profile)
