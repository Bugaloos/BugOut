const React = require('react')
const { connect } = require('react-redux')
const TextField = require('material-ui/TextField').default
const backButton = require('./backButton')

class KeyLocations extends React.Component {

  handleSubmit () {
    const { dispatch, showingComponent } = this.props
    const meetingPoint = this.refs.meetingPoint.input.value
    const safePoint = this.refs.safePoint.input.value
    if (showingComponent === 'CREATE_GROUP') {
      dispatch({type: 'UPDATE_GROUP_LOCATIONS', payload: {meetingPoint, safePoint}})
      dispatch({type: 'GROUP_FORWARD'})
    } else if (showingComponent === 'CREATE_PLAN') {
      dispatch({type: 'UPDATE_PLAN_LOCATIONS', payload: {meetingPoint, safePoint}})
    } else {
      console.log('what are you up to?')
    }
  }
  render () {
    const { dispatch, showingComponent, group, userPlan } = this.props
    const groupStep = group.step
    const planStep = userPlan.step
    
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
          {backButton(showingComponent, planStep, groupStep, dispatch)}
          <button onClick={this.handleSubmit.bind(this)}>Next Step</button>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(KeyLocations)
