const React = require('react')
const LoginForm = require('./loginForm')
const ShowLoginButton = require('./showLoginButton')

const LoginFormShowing = (props) => {
  const { dispatch } = props
  return props.showLoginForm
    ? <LoginForm dispatch={dispatch} /> // /   new LoginForm({...props})
    : <ShowLoginButton dispatch={dispatch} />
}

module.exports = LoginFormShowing
