const React = require('react')
const RaisedButton = require('material-ui/RaisedButton')
const FlatButton = require('material-ui/FlatButton')
const { connect } = require('react-redux')
const KeyLocations = require('../yourProfile/keyLocations')
const UserInventory = require('../yourProfile/userPlanInventory')

const {
  Step,
  Stepper,
  StepLabel,
  StepContent
} = require('material-ui/Stepper')

class UserPlanStepper extends React.Component {

  render () {
    console.log('props', this.props);
    const { userPlan } = this.props
    console.log('this is the plan', userPlan)
    return (
      <div style={{maxWidth: 500, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={userPlan.step} orientation='vertical'>
          <Step>
            <StepLabel>Key Locations</StepLabel>
            <StepContent>
              < KeyLocations />
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create Your Cache</StepLabel>
            <StepContent>
              < UserInventory />
            </StepContent>
          </Step>
        </Stepper>
      </div>
    )
  }
}

module.exports = connect((state) => state)(UserPlanStepper)
