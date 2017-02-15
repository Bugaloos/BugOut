const React = require('react')
const { connect } = require('react-redux')

const Map = require('./map')
const Inventory = require('./yourProfile/userPlanInventory')


class Plan extends React.Component {

  handleClick(){
    const { dispatch, userPlan } = this.props
    if(!userPlan.meetingPoint){
      return
    }
    dispatch({type: 'PLAN_SHOWING'})
  }

  render(){
    const { planShowing } = this.props
    const showing = (
      <div>
      <Inventory />
      <Map />
      </div>
    )
    const hidden = (
      <button onClick={this.handleClick.bind(this)}>Show Plan</button>
    )
    const display = planShowing
      ? showing
      : hidden
    return display
  }
}

module.exports = connect((state) => state)(Plan)
