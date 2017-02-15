const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const LogOut= require('./logout')



function AppBar (props) {
  const { dispatch, showingComponent, loggedIn, router} = props
  function handleClick(payload){
    dispatch({type: 'SHOWING_COMPONENT', payload: payload})
    router.push(`/users/${loggedIn}`)
  }
  console.log('props', props);

  const createGroupButton =
    <button onClick={() => handleClick('CREATE_GROUP')}>Create A Group</button>

  const createPlanButton =
    <button onClick={() => handleClick('CREATE_PLAN')}>Create A Plan</button>

  const myProfile =
    <button onClick={() => handleClick('MY_PROFILE')}>My Profile</button>

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
