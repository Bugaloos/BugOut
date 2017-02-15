const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const PouchDB = require('pouchdb')
const db = require('../../../pouchDB')
const RegisterButton = require('./register/showRegisterButton')

class Login extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props
    console.log(this.props);
    const userName = this.refs.userName.value
    const password = this.refs.password.value

    dispatch({type:'LOAD_START'})

    db.login({ userName, password }, (err, status) => {
      if (err) throw err
      if (status.login) {
        dispatch({type: 'AUTH_ERR', payload: null})
        dispatch({type: 'LOG_IN', payload: status.user._id})
        console.log(this.props);
        this.props.router.push(`/users/${status.user._id}`)
        dispatch({type:'LOAD_END'})
      } else {
        dispatch({type: 'AUTH_ERR', payload: status.error})
        dispatch({type:'LOAD_END'})
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
        <RegisterButton />
      </div>
      <br />
      <br />
      <div style={{color: 'red'}} >
        {this.props.authErr}
      </div>
    </form>
    )
  }
}

module.exports = connect((state) => state)(Login)
