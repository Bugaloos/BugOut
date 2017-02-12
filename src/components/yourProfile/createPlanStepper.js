import React from 'react'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent
  } from 'material-ui/Stepper'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
const { connect } = require('react-redux')
const CreatePlan = require('./createPlan')
const KeyLocations = require('./keyLocations')

class PlanStepper extends React.Component {

  handleNext () {
    const {dispatch} = this.props
    dispatch({type: 'STEP_FORWARD', payload: 1})
  }

  handlePrev () {
    const {stepIndex, dispatch} = this.props
    if (stepIndex > 0) {
      dispatch({type: 'STEP_BACK', payload: 1})
    }
  }

  renderStepActions (step) {
    const {stepIndex} = this.props

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={stepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple
          disableFocusRipple
          primary
          onClick={this.handleNext.bind(this)}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label='Back'
            disabled={stepIndex === 0}
            disableTouchRipple
            disableFocusRipple
            onClick={this.handlePrev.bind(this)}
         />
       )}
      </div>
    )
  }
  render () {
    const finished = false
    const {stepIndex} = this.props

    return (
      <div style={{maxWidth: 500, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation='vertical'>
          <Step>
            <StepLabel>Make Your Plan</StepLabel>
            <StepContent>
              < CreatePlan />
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
              <p>
                Lucas will guide you through setting up a cache
              </p>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>
        {finished}
      </div>
    )
  }
}

module.exports = connect((state) => state)(PlanStepper)
