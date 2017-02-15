const React = require('react')

const RegisterButton = (props) => {
  const { dispatch } = props

  function register () {
    dispatch({ type: 'SHOWING_COMPONENT', payload: 'REGISTER' })
  }

  return (
    <button onClick={register}>
      Register
    </button>
  )
}
module.exports = (RegisterButton)
