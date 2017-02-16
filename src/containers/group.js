const React = require('react')
const { connect } = require('react-redux')
const Messageboard = require('../components/messageboard')
const Map = require('../components/map')
const { Link } = require('react-router')
const AppBar = require('../components/appBar')
const GroupAddUser = require('../components/messageboard/groupAddUser.js')

function Group (props) {
  console.log('group', props);
  return (
    <div>
      <div className='groupTitle'>
        <h1>{props.group.name}</h1>
      </div>
      <AppBar {...props} />
      <div className='groupPlan'>
        <Messageboard router={props.router} />
        <GroupAddUser />
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(Group)

// <Map locations={props.locations} />
