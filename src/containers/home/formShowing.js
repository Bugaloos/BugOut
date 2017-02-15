const React = require('react')
const { connect, Link } = require('react-redux')
const LoginForm = require('./loginForm')
const RegisterForm = require('./register/registerForm')


function FormShowing (props) {
    return (props.formShowing === 'LOGIN')
      ? <LoginForm {...props} />
      : <RegisterForm {...props} />
  }

module.exports = connect((state) => state)(FormShowing)
