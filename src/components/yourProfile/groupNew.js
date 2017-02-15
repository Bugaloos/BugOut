const React = require('react')
const RaisedButton = require('material-ui/RaisedButton')
const FlatButton = require('material-ui/FlatButton')
const { connect } = require('react-redux')
const GroupName = require('./groupName')
const KeyLocations = require('../yourProfile/keyLocations')
const GroupInventory = require('../yourProfile/groupInventory')

const {
  Step,
  Stepper,
  StepLabel,
  StepContent
} = require('material-ui/Stepper')

class HalfStepper extends React.Component {

  render () {
    console.log('groupNew', this.props);
    const { group } = this.props

    return (
      <div className='stepper'>
        <Stepper activeStep={group.step} orientation='vertical'>
          <Step>
            <StepLabel>Setup Your Group</StepLabel>
            <StepContent>
              < GroupName />
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Key Locations</StepLabel>
            <StepContent>
              < KeyLocations />
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create Your Cache</StepLabel>
            <StepContent>
              < GroupInventory {...this.props} />
            </StepContent>
          </Step>
        </Stepper>
      </div>
    )
  }
}

module.exports = connect((state) => state)(HalfStepper)
