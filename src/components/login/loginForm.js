const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const request = require('superagent')
const PouchDB = require('pouchdb')
const db = require('../../../pouchDB')


class Login extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props

    const userName = this.refs.userName.value
    const password = this.refs.password.value


    db.login({ userName, password }, (err, status) => {
      if (err) throw err
      if (status.login) {
        dispatch({type: 'AUTH_ERR', payload: null})
        dispatch({type: 'LOG_IN', payload: status.user._id})
        this.props.router.push(`/users/${status.user._id}`)
      } else {
        dispatch({type: 'AUTH_ERR', payload: status.error})
      }
    })
  }

  render () {
    return (<form>
        <input placeholder='User Name' className='input' ref='userName' />
        <br />
        <input placeholder='Password' className='input' type='password' ref='password' />
        <br />
      <br />
      <div className='button'>
        <button onClick={this.handleSubmit.bind(this)}>Login</button>
      </div>
      <br />
      <br />
      <div style={{color: 'red', backgroundColor:'#fff59d'}} >
        {this.props.authErr}
      </div>
    </form>
    )
  }
}

module.exports = connect((state) => state)(Login)
