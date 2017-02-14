const React = require('react')
const LoginForm = require('./loginForm')
const ShowLoginButton = require('./showLoginButton')

const LoginFormShowing = (props) => {
  const { dispatch, router, showLoginForm } = props
  return showLoginForm
    ? <LoginForm dispatch={dispatch} router={router} /> // /   new LoginForm({...props})
    : <ShowLoginButton dispatch={dispatch} router={router} />
}

module.exports = LoginFormShowing
