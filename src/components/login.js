const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')
const request = require('superagent')
const PouchDB = require('pouchdb')
const db = require('../../pouchDB')

class Login extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props

    const email = this.refs.email.value
    const password = this.refs.password.value

    db.login({ email, password })
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
              Email:
              <input className='homePageButton' type='text' ref='email' placeholder='Email' />
              Password:
              <input className='homePageButton' type='password' ref='password' placeholder='Password' />
        </div>
        <button onClick={this.handleSubmit.bind(this)}>Login </button>
      </form>
    )
  }
}

module.exports = connect((state) => state)(Login)
