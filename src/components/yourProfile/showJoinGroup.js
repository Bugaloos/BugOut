const React = require('react')
const { connect } = require('react-redux')
const JoinGroup = require('./joinGroup')

function ShowJoinGroup (props) {
  const joinGroupButton =
    <button onClick={() => props.dispatch({type: 'TOGGLE_JOIN_GROUP'})}>Join A Group</button>

  return props.showJoinGroup
    ? <JoinGroup {...props} />
    : joinGroupButton
}

module.exports = connect((state) => state)(ShowJoinGroup)
