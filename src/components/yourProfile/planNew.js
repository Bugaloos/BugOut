const React = require('react')
const RaisedButton = require('material-ui/RaisedButton')
const FlatButton = require('material-ui/FlatButton')
const { connect } = require('react-redux')
const GroupName = require('./groupName')
const KeyLocations = require('../yourProfile/keyLocations')
const Inventory = require('../yourProfile/inventory')

const {
  Step,
  Stepper,
  StepLabel,
  StepContent
} = require('material-ui/Stepper')

class HalfStepper extends React.Component {

  render () {
    const {plan} = this.props

    return (
      <div style={{maxWidth: 500, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={plan.step} orientation='vertical'>
          <Step>
            <StepLabel>Key Locations</StepLabel>
            <StepContent>
              < KeyLocations />
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create Your Cache</StepLabel>
            <StepContent>
              < Inventory />
            </StepContent>
          </Step>
        </Stepper>
      </div>
    )
  }
}

module.exports = connect((state) => state)(HalfStepper)
