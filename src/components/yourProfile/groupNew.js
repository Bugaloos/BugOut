const React = require('react')
const RaisedButton = require('material-ui/RaisedButton')
const FlatButton = require('material-ui/FlatButton')
const { connect } = require('react-redux')
const {
  Step,
  Stepper,
  StepLabel,
  StepContent
} = require('material-ui/Stepper')

const GroupName = require('./groupName')
const KeyLocations = require('../yourProfile/keyLocations')
const Inventory = require('../yourProfile/inventory')

class GroupNew extends React.Component {

  render () {
    const { group, dispatch, plan } = this.props

    return (
      <div style={{maxWidth: 500, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={group.step} orientation='vertical'>
          <Step>
            <StepLabel>Setup Your Group</StepLabel>
            <StepContent>
              < GroupName dispatch={dispatch} />
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Key Locations</StepLabel>
            <StepContent>
              < KeyLocations dispatch={dispatch} showingComponent={showingComponent} />
            </StepContent>
          </Step>
          <Step>
            <StepLabel>Create Your Cache</StepLabel>
            <StepContent>
              < Inventory dispatch={dispatch} plan={plan} />
            </StepContent>
          </Step>
        </Stepper>
      </div>
    )
  }
}

module.exports = GroupNew
