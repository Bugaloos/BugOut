const React = require('react')
const RegisterForm = require('./registerForm')
const ShowRegisterButton = require('./showRegisterButton')

const RegisterFormShowing = (props) => {
  const { dispatch } = props
  return props.showRegisterForm
    ? <RegisterForm dispatch={dispatch} />
    : <ShowRegisterButton dispatch={dispatch} />
}

module.exports = RegisterFormShowing
