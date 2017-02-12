const React =require('react')
const RaisedButton = require('material-ui/RaisedButton')
const FlatButton = require('material-ui/FlatButton')
const { connect } = require('react-redux')
const CreatePlan = require('./createPlan')
const KeyLocations = require('./planKeyLocations')
const {
  Step,
  Stepper,
  StepLabel,
  StepContent
} = require('material-ui/Stepper')

class PlanStepper extends React.Component {

  handleNext () {
    const {dispatch} = this.props
    dispatch({type: 'PLAN_STEP_FORWARD', payload: 1})
  }

  handlePrev () {
    const {planStepIndex, dispatch} = this.props
    if (planStepIndex > 0) {
      dispatch({type: 'PLAN_STEP_BACK', payload: 1})
    }
  }

  renderStepActions (step) {
    const {planStepIndex} = this.props

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={planStepIndex === 2 ? 'Finish' : 'Next'}
          disableTouchRipple
          disableFocusRipple
          primary
          onClick={this.handleNext.bind(this)}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label='Back'
            disabled={planStepIndex === 0}
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
    const {planStepIndex} = this.props

    return (
      <div style={{maxWidth: 500, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={planStepIndex} orientation='vertical'>
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
