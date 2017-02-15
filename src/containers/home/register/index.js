const React = require('react')
const RegisterForm = require('./registerForm')
const ShowRegisterButton = require('./showRegisterButton')

const RegisterFormShowing = (props) => {
  return props.showingComponent === 'REGISTER'
    ? <RegisterForm {...props} />
    : <ShowRegisterButton />
}

module.exports = (RegisterFormShowing)
