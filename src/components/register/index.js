const React = require('react')
const RegisterForm = require('./registerForm')
const ShowRegisterButton = require('./showRegisterButton')

const RegisterFormShowing = (props) => {
  const { dispatch, router, showRegisterForm } = props
  return showRegisterForm
    ? <RegisterForm dispatch={dispatch} router={router} />
    : <ShowRegisterButton dispatch={dispatch} />
}

module.exports = RegisterFormShowing
