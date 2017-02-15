const React = require('react')
const { connect } = require('react-redux')
const LoginButton = (props) => {
  const { dispatch } = props

  function login () {
    dispatch({type: 'ENTRY_SHOWING', payload: 'LOGIN'})
  }

  return (
    <button id='loginButton' onClick={login}>
      Login
    </button>
  )
}
module.exports = connect((state) => state)(LoginButton)
