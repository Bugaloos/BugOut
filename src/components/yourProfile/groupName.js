const React = require('react')
const { connect } = require('react-redux')
const TextField = require('material-ui/TextField').default
const db = require('../../../pouchDB')

class GroupName extends React.Component {
  moveForward () {
    const groupName = this.refs.groupName.input.value.toLowerCase()
    const { dispatch } = this.props
    db.checkGroupUnique(groupName, (err, status) => {
      console.log('status', status);
      if(err) throw err
      if (status.available) {
        dispatch({type: 'UPDATE_GROUP_NAME', payload: groupName})
      } else {
        dispatch({type: 'ERROR', payload: 'GROUP_NAME_TAKEN'})
      }
    })
  }

  render () {
    return (
      <div>
        <form>
          <div>
            <TextField
              hintText='Group Name'
              ref='groupName' />
            <br />
          </div>
          <button onClick={() => this.moveForward()}>Next Step</button>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(GroupName)
