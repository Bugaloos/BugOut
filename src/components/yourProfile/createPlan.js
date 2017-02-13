const React = require('react')
const { connect } = require('react-redux')
const TextField = require('material-ui/TextField').default

class CreatePlan extends React.Component {

  handleSubmit () {
    const { dispatch } = this.props
    const planName = this.refs.planName.input.value

    dispatch({type: 'PLAN_STEP_FORWARD', payload: 1})

    var newPlan = {
      planName
    }

    // db.createPlan(newPlan, (err, status) => {
    //   console.log('waterfall effect', status)
    // })
  }

  render () {
    return (
      <div>
        <form>
          <div>
            <TextField
              hintText='Plan Name'
              ref='planName' />
            <br />
          </div>
          <button onClick={this.handleSubmit.bind(this)}>Next Step</button>
        </form>
      </div>
    )
  }
}

module.exports = connect((state) => state)(CreatePlan)
// <button onClick={this.handleSubmit.bind(this)}>Sign Up</button>
