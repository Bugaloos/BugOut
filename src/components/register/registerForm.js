const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')
const request = require('superagent')
const PouchDB = require('pouchdb')
const db = require('../../../pouchDB')

class Login extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props

    const name = this.refs.name.value
    const email = this.refs.email.value
    const password = this.refs.password.value

    var newUser = {
      _id: email,
      name,
      password
    }
    db.register(newUser)
    // var opts = {live: true};
    // db.sync(remoteCouch, opts, syncError)
    //
    // function syncError() {
    //   syncDom.setAttribute('data-sync-state', 'error');
    // }
  }

  render () {
    return (
      <form>
        <div>
          Name:
          <input className='homePageButton' type='text' ref='name' placeholder='Name' /><br />
          Email:
          <input className='homePageButton' type='text' ref='email' placeholder='Email' /><br />
          Password:
          <input className='homePageButton' type='password' ref='password' placeholder='Password' /><br />
          Confirm Password:
          <input className='homePageButton' type='password' ref='confirmPassword' placeholder='Password' />
        </div>
        <button onClick={this.handleSubmit.bind(this)}>Sign Up</button>
      </form>
    )
  }
}

module.exports = connect((state) => state)(Login)
