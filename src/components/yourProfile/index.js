const React = require('react')
const { connect } = require('react-redux')
const GroupNew = require('./groupNew')
const UserPlanNew = require('./userPlanNew')
const CompleteProfile = require('./completeProfile')
const AppBar = require('../appBar')

function Profile (props) {
  const { dispatch, showingComponent, loggedIn } = props
  function getComponent (component) {
    switch (component) {

      case 'CREATE_GROUP':
        return <GroupNew {...props} />
      case 'CREATE_PLAN':
        return <UserPlanNew {...props} />
      case 'MY_PROFILE':
        return <CompleteProfile />
      default:
        return <CompleteProfile />
    }
  }

  return (
    <div >
      <AppBar {...props} />
      <div className='mainComponent'>
        <div>{getComponent(showingComponent)}</div>
    </div>
    </div>
  )
}

module.exports = connect((state) => state)(Profile)
