const React = require('react')
const { connect } = require('react-redux')
const TextField = require('material-ui/TextField').default
const db = require('../../../pouchDB')

class GroupName extends React.Component {
  moveForward () {
    const groupName = this.refs.groupName.input.value
    const { dispatch } = this.props
    db.checkGroupUnique(groupName, (err, status) => {
      if (err) {
        dispatch({type: 'ERROR', payload: 'GROUP_NAME_TAKEN'})
      } else {
        dispatch({type: 'UPDATE_GROUP_NAME', payload: groupName})
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
