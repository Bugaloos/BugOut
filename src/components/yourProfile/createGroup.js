const React = require('react')
const { connect } = require('react-redux')
const TextField = require('material-ui/TextField').default
const db = require('../../../pouchDB')

// This component will create a new entry in the database with an identifier of groupname, linked to userIDs who are members of the group.

// Data flow for 'create group'
// ------> user submits create group
// ------> create group submits data to PouchDB
// ------> pouchDB checks for match
// ------> if match, returns 'already exists', else pouchDB calls heroku
// ------> heroku passes data to Cloudant, to check for existence or create
// ------> case exists returns 'already exists', else creates db returns new db
// ------> heroku passes back new entry to PouchDB

class CreateGroup extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props
    const groupName = this.refs.groupName.input.value.toLowerCase()

    dispatch({type: 'GROUP_STEP_FORWARD', payload: 1})


    var newGroup = {
      groupName
    }

  //   db.createGroup(newGroup, (err, status) => {
  //     if (err) console.log(err)
  //     console.log('waterfall effect', status)
  //   })
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
          <button onClick={this.handleSubmit.bind(this)}>Next Step</button>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(CreateGroup)
