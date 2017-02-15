const React = require('react')
const { connect } = require('react-redux')

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
module.exports = connect((state) => state)(RegisterButton)
