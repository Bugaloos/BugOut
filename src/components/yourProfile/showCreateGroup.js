const React = require('react')
const { connect } = require('react-redux')
const CreateGroupStepper = require('./createGroupStepper')

function showCreateGroup (props) {
  const createGroupButton =
    <button onClick={() => props.dispatch({type: 'TOGGLE_CREATE_GROUP'})}>Create A Group</button>

  return props.showCreateGroup
    ? <CreateGroupStepper {...props} />
    : createGroupButton
}

module.exports = connect((state) => state)(showCreateGroup)
