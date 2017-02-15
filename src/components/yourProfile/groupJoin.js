const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const request = require('superagent')
const PouchDB = require('pouchdb')
const db = require('../../../pouchDB')

class JoinGroup extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props
    const groupName = this.refs.groupName.value
    const groupPlan = this.refs.groupPlan.value

    var newGroup = {
      groupName,
      groupPlan
    }

    db.createGroup(newGroup, (err, status) => {
      console.log('waterfall effect', status)
    })
  }

  render () {
    return (
      <div className='stepper'>
        <form>
          <div >
            <input
              placeholder='Group Name'
              ref='groupName'
              className='input'/>
            <br />
          </div>
          <button onClick={this.handleSubmit.bind(this)}>Join Group</button>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(JoinGroup)
