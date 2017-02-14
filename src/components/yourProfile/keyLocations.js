const React = require('react')
const { connect } = require('react-redux')
const TextField = require('material-ui/TextField').default

class KeyLocations extends React.Component {

  handleSubmit () {
    const { dispatch, showingComponent } = this.props
    const meetingPoint = this.refs.meetingPoint.input.value
    const safePoint = this.refs.safePoint.input.value
    if (showingComponent === 'CREATE_GROUP') {
      dispatch({type: 'UPDATE_GROUP_LOCATIONS', payload: meetingPoint, safePoint})
    } else if (showingComponent === 'CREATE_PLAN') {
      dispatch({type: 'UPDATE_PLAN_LOCATIONS', payload: meetingPoint, safePoint})
    } else {
      console.log('what are you up to?')
    }
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
