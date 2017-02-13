const React = require('react')
const { connect } = require('react-redux')
const Messageboard = require('../components/messageboard')
// const Map = require('../components/map')
const { Link } = require('react-router')

// This container will have a text about the groups plan based upon the groupsID and will also call the messageboard component using the groupsID.

// Along the side of this component will be a list of all the users who are part of this group based on searching the database for ???
function Group (props) {
  return (
    <div>
      <h1>{props.group}</h1>
      <Link to={`/users/${props.loggedIn}`}>
        <button>{props.loggedIn}s profile</button>
      </Link>
      // <Map />
      <p>This is the main description of the plan for {props.group}</p>
      <Messageboard router={props.router} />
    </div>
  )
}

module.exports = connect((state) => state)(Group)
