const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const request = require('superagent')
const PouchDB = require('pouchdb')

const db = require('../../../../pouchDB')
const checkValid = require('./checkvalid')

class Register extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props

    const userName = this.refs.userName.value
    const email = this.refs.email.value
    const password = this.refs.password.value
    const confirmPassword = this.refs.confirmPassword.value

    var newUser = {
      email,
      userName,
      password,
      confirmPassword
    }

    checkValid(newUser, res => {
      if(res.valid) {
        db.register(newUser, (err, status) => {
          if (err) throw error
          if (status.register) {
            dispatch({type: 'AUTH_ERR', payload: null})
            dispatch({type: 'LOG_IN', payload: status.user})
            this.props.router.push(`/users/${status.user._id}`)
          } else {
            dispatch({type: 'AUTH_ERR', payload: status.error})
          }
        })
      }else{
        dispatch(res.dispatch)
      }
    })
  }


  render () {

    return (
      <form>
          <input placeholder='User Name' className='input' ref='userName' />
          <br />
          <input placeholder='Email' className='input' type='email' ref='email' />
          <br />
          <input placeholder='Password' className='input' type='password' ref='password' />
          <br />
          <input placeholder='Confirm Password' className='input' type='password' ref='confirmPassword' />
          <br />
        <br /><br />
        <div style={{color: 'red'}}>{this.props.authErr}</div>
        <button onClick={this.handleSubmit.bind(this)}>Sign Up</button>
      </form>
    )
  }
}

module.exports = connect((state) => state)(Register)
