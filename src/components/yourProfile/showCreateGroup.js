const React = require('react')
const { connect } = require('react-redux')
const CreateGroupStepper = require('./createGroupStepper')

function showCreateGroup (props) {

  return props.showCreateGroup
    ? <CreateGroupStepper {...props} />
    : <button onClick={() => {
      console.log("button", props);
        props.dispatch({type: 'TOGGLE_CREATE_GROUP'})
      }
      }>Create A Group</button>
}

module.exports = connect((state) => state)(showCreateGroup)
