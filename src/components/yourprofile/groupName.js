const React = require('react')
const { connect } = require('react-redux')
const TextField = require('material-ui/TextField').default
const db = require('../../../pouchDB')

class GroupName extends React.Component {
  render () {
    const { dispatch } = this.props
    return (
      <div>
        <form>
          <div>
            <TextField
              hintText='Group Name'
              ref='groupName' />
            <br />
          </div>
          <button onClick={() => {
            const payload = {
              name: this.refs.groupName.input.value
            }
            db.checkGroupUnique(payload.name, (err, status) => {
              if (err) {
                dispatch({type: 'ERROR', payload: 'GROUP_NAME_TAKEN'})
              } else {
                dispatch({type: 'UPDATE_GROUP', payload})
              }
            })
          }}>Next Step</button>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(GroupName)
