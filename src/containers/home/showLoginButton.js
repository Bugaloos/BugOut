const React = require('react')

const LoginButton = (props) => {
  const { dispatch } = props

  function login () {
    dispatch({type: 'ENTRY_SHOWING', payload: 'LOGIN'})
  }

  return (
    <button onClick={login}>
      Login
    </button>
  )
}
module.exports = (LoginButton)
