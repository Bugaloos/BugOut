const React = require('react')
const { connect } = require('react-redux')
const Group = require ('../groups')
const Plan = require ('../plan')

const Inventory = require ('./inventory')
const ShowCreateGroup = require('./showCreateGroup')
const ShowCreatePlan = require('./showCreatePlan')
const ShowJoinGroup = require('./showJoinGroup')


// This component will show plans and groups based upon a userID
function Profile (props) {
  return (
    <div>
      <Inventory {...props} />
      <h1>Welcome {props.loggedIn}!</h1>
      <ShowCreateGroup {...props} />
      <ShowCreatePlan {...props} />
      <ShowJoinGroup {...props} />
    </div>

  )
}

module.exports = connect((state) => state)(Profile)
