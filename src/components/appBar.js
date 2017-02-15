const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const LogOut= require('./logout')


function AppBar (props) {
  console.log('props');
  const { dispatch, showingComponent, loggedIn } = props

  const createGroupButton =
    <button onClick={() => dispatch({type: 'SHOWING_COMPONENT', payload: 'CREATE_GROUP'})}>Create A Group</button>

  const createPlanButton =
    <button onClick={() => dispatch({type: 'SHOWING_COMPONENT', payload: 'CREATE_PLAN'})}>Create A Plan</button>

  const myProfile =
    <button onClick={() => dispatch({type: 'SHOWING_COMPONENT', payload: 'MY_PROFILE'})}>My Profile</button>

  return (
      <div>
        <div>{myProfile}
          {createPlanButton}
          {createGroupButton}
          <LogOut {...props} />
        </div>
      </div>
  )
}



module.exports = connect((state) => state)(AppBar)
