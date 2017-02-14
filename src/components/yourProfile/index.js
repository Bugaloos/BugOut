const React = require('react')
const { connect } = require('react-redux')

const Group = require('../groups')
const Inventory = require('./inventory')
const GroupNew = require('./groupNew')
const PlanNew = require('./planNew')
const GroupJoin = require('./groupJoin')
const CompleteProfile = require('./completeProfile')

function Profile (props) {
  const { dispatch, showingComponent, loggedIn, group, plan } = props

  const createGroupButton =
    <button onClick={() => dispatch({type: 'SHOWING_COMPONENT', payload: 'CREATE_GROUP'})}>Create A Group</button>

  const joinGroupButton =
    <button onClick={() => dispatch({type: 'SHOWING_COMPONENT', payload: 'JOIN_GROUP'})}>Join A Group</button>

  const createPlanButton =
    <button onClick={() => dispatch({type: 'SHOWING_COMPONENT', payload: 'CREATE_PLAN'})}>Create A Plan</button>

  const myProfile =
    <button onClick={() => dispatch({type: 'SHOWING_COMPONENT', payload: 'MY_PROFILE'})}>My Profile</button>

  function getComponent (component) {
    switch (component) {

      case 'CREATE_GROUP':
        return <GroupNew dispatch={dispatch} group={group} plan={plan} />
      case 'CREATE_PLAN':
        return <PlanNew dispatch={dispatch} showingComponent={showingComponent} plan={plan} />
      case 'JOIN_GROUP':
        return <GroupJoin dispatch={dispatch} />
      case 'MY_PROFILE':
        return <CompleteProfile group={group} />
      default:
        return <CompleteProfile group={group} />
    }
  }

  return (
    <div>
      <h1> Welcome {loggedIn}</h1>
      <div>{myProfile}{createPlanButton}{createGroupButton}{joinGroupButton}</div>
      <div>{getComponent(showingComponent)}</div>
    </div>
  )
}

module.exports = connect((state) => state)(Profile)
