const React = require('react')

const RegisterButton = (props) => {
  const { dispatch } = props

  function register () {
    dispatch({type: 'TOGGLE_REGISTER_FORM'})
  }

  return (
    <button onClick={register}>
      Register
    </button>
  )
}
module.exports = (RegisterButton)
