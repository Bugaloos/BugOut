const React = require('react')

const LoginButton = (props) => {
  const { dispatch } = props

  function login () {
    dispatch({type: 'TOGGLE_LOGIN_FORM'})
  }

  return (
    <button onClick={login}>
      Login
    </button>
  )
}
module.exports = (LoginButton)
