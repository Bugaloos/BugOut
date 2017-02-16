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
    const { dispatch, router } = this.props
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
        dispatch({type: 'LOAD_START'})
        db.register(newUser, (err, status) => {
          if (err) throw error
          if (status.register) {
            dispatch({type: 'AUTH_ERR', payload: null})
            dispatch({type: 'LOG_IN', payload: status.user})
            router.push('/info')
            dispatch({type: 'LOAD_END'})

          } else {
            dispatch({type: 'AUTH_ERR', payload: status.error})
            dispatch({type: 'LOAD_END'})
          }
        })
      }else{
        dispatch(res.dispatch)
      }
    })
  }


  render () {
    console.log('HERE!', this.props);

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
