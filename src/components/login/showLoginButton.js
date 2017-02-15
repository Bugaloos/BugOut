const React = require('react')

const LoginButton = (props) => {
  const { dispatch } = props

  function login () {
    dispatch({type: 'SHOWING_COMPONENT', payload:'LOGIN'})
  }

  return (
    <button onClick={login}>
      Login
    </button>
  )
}
module.exports = (LoginButton)
