const React = require('react')
const { connect } = require('react-redux')
const Group = require ('../groups')
const Plan = require ('../plan')

const Inventory = require ('./inventory')
const GroupNew = require('./groupNew')
const ShowCreatePlan = require('./showCreatePlan')
const ShowJoinGroup = require('./showJoinGroup')


// This component will show plans and groups based upon a userID
function Profile (props) {
  const createGroupButton =
    <button onClick={() => props.dispatch({type: 'SHOWING_COMPONENT', payload: 'CREATE_GROUP'})}>Create A Group</button>

  const joinGroupButton =
    <button onClick={() => props.dispatch({type: 'SHOWING_COMPONENT', payload: 'JOIN_GROUP'})}>Join A Group</button>

  const createPlanButton =
    <button onClick={() => props.dispatch({type: 'SHOWING_COMPONENT', payload: 'CREATE_PLAN'})}>Create A Plan</button>

  const showingComponent = props.showingComponent

  function getComponent (component) {
    switch (component) {

      case 'CREATE_GROUP':
        return <GroupNew />
      case 'CREATE_PLAN':
        return <p>Create Plan</p>
      default:
        return <p>Default</p>
    }
  }

  return (
    <div>
      <h1> Welcome {props.loggedIn}</h1>
      <div>createPlanButton</div>
      <div>createGroupButton</div>
      <div>joinGroupButton</div>
      {getComponent(showingComponent)}
    </div>

  )
}

module.exports = connect((state) => state)(Profile)
