const React = require('react')
const RegisterForm = require('./registerForm')
const ShowRegisterButton = require('./showRegisterButton')

const RegisterFormShowing = (props) => {

  return props.showRegisterForm
    ? <RegisterForm {...props} />
    : <ShowRegisterButton {...props} />
}

module.exports = (RegisterFormShowing)
