const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const { RaisedButton } = require('material-ui')
const request = require('superagent')
const PouchDB = require('pouchdb')

class Login extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props

    const name = this.refs.name.value
    const email = this.refs.email.value
    const password = this.refs.password.value

    var db = new PouchDB('users')
    var remoteCouch = 'https://bill-burgess.cloudant.com/users/'

    var user = {
      _id: email,
      name: name,
      password: password
    };
    db.put(user, (err, result) => {
      if (!err) {
        console.log('Successfully posted a todo!', result);
      }
    })
    var opts = {live: true};
    db.sync(remoteCouch, opts, syncError)

    function syncError() {
      syncDom.setAttribute('data-sync-state', 'error');
    }
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
