const React = require('react')

const RegisterButton = (props) => {
  const { dispatch } = props

  function register () {
    dispatch({ type: 'ENTRY_SHOWING', payload: 'REGISTER' })
  }

  return (
    <button onClick={register}>
      Register
    </button>
  )
}
module.exports = (RegisterButton)
