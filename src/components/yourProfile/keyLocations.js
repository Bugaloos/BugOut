const React = require('react')
const { connect } = require('react-redux')
const backButton = require('./backButton')

class KeyLocations extends React.Component {

  handleSubmit () {
    const { dispatch, showingComponent } = this.props
    const meetingPoint = this.refs.meetingPoint.value
    const safePoint = this.refs.safePoint.value
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
            <input
              placeholder='Meeting Point'
              className='input'
              ref='meetingPoint' />
            <br />
            <input
              placeholder='Safe Point'
              className='input'
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
