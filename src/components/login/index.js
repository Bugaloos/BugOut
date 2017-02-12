const React = require('react')
const LoginForm = require('./loginForm')
const ShowLoginButton = require('./showLoginButton')

const LoginFormShowing = (props) => {
  return props.showLoginForm
    ? <LoginForm {...props} />
    : <ShowLoginButton {...props} />
}

module.exports = (LoginFormShowing)
