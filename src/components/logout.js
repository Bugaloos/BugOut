const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

class Logout extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props

    dispatch({type: 'LOG_OUT', payload: null})
    this.props.router.push('/')
  }

  render () {
    return (
      <div>
        <form>
          <button onClick={this.handleSubmit.bind(this)}> Log Out </button>
        </form>
      </div>
    )
  }
}



module.exports = connect((state) => state)(Logout)
