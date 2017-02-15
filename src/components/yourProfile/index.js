const React = require('react')
const { connect } = require('react-redux')
const GroupNew = require('./groupNew')
const UserPlanNew = require('./userPlanNew')
const GroupJoin = require('./groupJoin')
const CompleteProfile = require('./completeProfile')

function Profile (props) {
  const { dispatch, showingComponent, loggedIn } = props

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
        return <GroupNew />
      case 'CREATE_PLAN':
        return <UserPlanNew />
      case 'JOIN_GROUP':
        return <GroupJoin />
      case 'MY_PROFILE':
        return <CompleteProfile />
      default:
        return <CompleteProfile />
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
