const React = require('react')
const { connect, Link } = require('react-redux')
const LoginForm = require('./loginForm')
const RegisterForm = require('./register/registerForm')


function FormShowing (props) {
  console.log('formShowing', props);
    return (props.formShowing === 'LOGIN')
      ? <LoginForm />
      : <RegisterForm />
  }

module.exports = connect((state) => state)(FormShowing)
