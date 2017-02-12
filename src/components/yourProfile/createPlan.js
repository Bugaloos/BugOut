const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const TextField = require('material-ui/TextField').default
const request = require('superagent')
const PouchDB = require('pouchdb')
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

class CreatePlan extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props
    const groupName = this.refs.groupName.input.value
    const groupPlan = this.refs.groupPlan.input.value

    var newPlan = {
      groupName,
      groupPlan
    }

    // db.createPlan(newPlan, (err, status) => {
    //   console.log('waterfall effect', status)
    // })
  }

  render () {
    return (
      <div>
        <form>
          <div>
            <TextField
              hintText='Plan Name'
              ref='groupName' />
            <br />
          </div>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(CreatePlan)
// <button onClick={this.handleSubmit.bind(this)}>Sign Up</button>
