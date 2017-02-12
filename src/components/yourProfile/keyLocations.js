const React = require('react')
const { connect } = require('react-redux')
const TextField = require('material-ui/TextField').default

class KeyLocations extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props
    const meetingPoint = this.refs.meetingPoint.input.value
    const safePoint = this.refs.safePoint.input.value

    dispatch({type: 'STEP_FORWARD', payload: 1})
    dispatch({type: 'ADD_LOCATIONS', payload: meetingPoint, safePoint})
  }

  render () {
    return (
      <div>
        <form>
          <div>
            <TextField
              hintText='Meeting Point'
              ref='meetingPoint' />
            <br />
            <TextField
              hintText='Safe Point'
              ref='safePoint' />
            <br />
          </div>
          <button onClick={this.handleSubmit.bind(this)}>Next Step</button>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(KeyLocations)
