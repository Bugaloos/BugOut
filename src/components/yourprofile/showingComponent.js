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

  const showingComponent = props.showingComponent
  console.log('first', showingComponent);

  function getComponent(component) {
    console.log(component);
    switch (component) {
      case 'CREATE_GROUP':
        return <ShowCreateGroup />
      case 'CREATE_PLAN':
        return <p>Create Plan</p>
      default:
        return <p>Default</p>
      }
  }

  return (
    <div>
      {getComponent(showingComponent)}
    </div>

  )
}

module.exports = connect((state) => state)(Profile)
