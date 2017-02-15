const React = require('react')
const { connect } = require('react-redux')
const db = require('../../../pouchDB')

class AddUser extends React.Component {
  addUser () {
    const { dispatch, group } = this.props
    const userName = this.refs.userName.input.value
    const groupName = group.name
    db.addUserToGroup(userName, groupName, (err, status) => {  // when user plan
      if (err) console.log('error line 12', err);
      if (status) {
        console.log('hit line 14', status);
        dispatch({type: 'SHOW_USER_ADDED', payload: false})
      } else {
        console.log('hit line 17');
        dispatch({type: 'SHOW_USER_ADDED', payload: true})
      }
      // TODO: HOOK UP TO TIME OUT
    })
  }
  userAdded () {
    return this.props.userAdded
    ? <p>User Successfully Added to Group</p>
    : <p>Failed to Add User</p>
  }
  render () {
    return (
      <div>
        {this.userAdded}
        <form>
          <div>
            <TextField
              hintText='User Name'
              ref='userName' />
            <br />
          </div>
          <button onClick={() => this.addUser()}>Add User</button>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(AddUser)
