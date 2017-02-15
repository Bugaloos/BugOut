const React = require('react')
const { connect } = require('react-redux')
const db = require('../../../pouchDB')

class GroupName extends React.Component {
  moveForward () {
    const groupName = this.refs.groupName.value
    const { dispatch } = this.props
    db.checkGroupUnique(groupName, (err, status) => {
      if (err) throw err
      if (status.available){
        dispatch({type: 'PROPOSED_GROUP_NAME', payload: groupName})
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
            <input
              placeholder='Group Name'
              ref='groupName'
              className='input'
              />
            <br />
          </div>
          <button onClick={() => this.moveForward()}>Next Step</button>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(GroupName)
