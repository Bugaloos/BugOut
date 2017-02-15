const React = require('react')
const { connect } = require('react-redux')
const Messageboard = require('../components/messageboard')
const Map = require('../components/map')
const { Link } = require('react-router')
const AppBar = require('../components/appBar')

function Group (props) {
  console.log('group', props);
  return (
    <div>
      <div className='groupTitle'>
        <h1>{props.group.name}</h1>
      </div>
      <AppBar {...props} />
      <div className='groupPlan'>
        <p>This is the main description of the plan for {props.group.name}</p>
        <Messageboard router={props.router} />
      </div>
      <div className='theMap'>
        <Map locations={props.locations} />
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(Group)
