const React = require('react')
const { connect } = require('react-redux')
const Group = require ('../components/groups')
const Plan = require ('../components/plan')

// This component will show plans and groups based upon a userID
function Profile (props) {
  return (
    <div>
      <h1>Welcome {props.loggedIn}!</h1>
      <div>
        <h2>Your Plans</h2>
        < Plan {...props} />
      </div>
      <div>
        <h2>Your Groups</h2>
        < Group {...props} />
      </div>
    </div>

  )
}

module.exports = connect((state) => state)(Profile)
