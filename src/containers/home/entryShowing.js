const React = require('react')
const { connect } = require('react-redux')
const LoginForm = require('../../components/login/loginForm')
const RegisterForm = require('../../components/register/registerForm')

function entryShowing (props) {
  return (entryShowing === 'LOGIN')
  ? <LoginForm />
  : <RegisterForm />
}

module.exports = connect((state) => state)(entryShowing)
