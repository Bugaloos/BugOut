const React = require('react')
const RaisedButton = require('material-ui/RaisedButton')
const FlatButton = require('material-ui/FlatButton')
const { connect } = require('react-redux')
const Group = require('./createGroup')
const KeyLocations = require('./groupKeyLocations')
const {
  Step,
  Stepper,
  StepLabel,
  StepContent
} = require('material-ui/Stepper')

class HalfStepper extends React.Component {

  handleNext () {
    const {dispatch} = this.props
    dispatch({type: 'GROUP_STEP_FORWARD', payload: 1})
  }

  handlePrev () {
    const {group.step, dispatch} = this.props
    if (group.step > 0) {
      dispatch({type: 'GROUP_STEP_BACK', payload: 1})
    }
  }

  renderStepActions (step) {
    const {group.step} = this.props

    return (
      <div style={{margin: '12px 0'}}>
        <RaisedButton
          label={group.step === 2 ? 'Finish' : 'Next'}
          disableTouchRipple
          disableFocusRipple
          primary
          onClick={this.handleNext.bind(this)}
          style={{marginRight: 12}}
        />
        {step > 0 && (
          <FlatButton
            label='Back'
            disabled={group.step === 0}
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
    const {group.step} = this.props

    return (
      <div style={{maxWidth: 500, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={group.step} orientation='vertical'>
          <Step>
            <StepLabel>Setup Your Group</StepLabel>
            <StepContent>
              < Group />
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
                Lucas will guide you through making your cache
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

module.exports = connect((state) => state)(HalfStepper)
