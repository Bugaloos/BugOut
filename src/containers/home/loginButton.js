const React = require('react')
const { connect } = require('react-redux')

function login (props) {
  console.log(props, 'log in button propss')
  props.dispatch({type: 'ENTRY_SHOWING', payload: 'LOGIN'})
}

function LoginButton (props) {
  return (props.formShowing === 'LOGIN')
  ? <div />
  : <button id='loginButton' onClick={login}> Login</button>
}

module.exports = connect((state) => state)(LoginButton)
