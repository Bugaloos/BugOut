const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

class Info extends React.Component {

  handleSubmit () {
    this.props.router.push('/')
  }

  render () {
    return (
      <div>
        <h3>Kia Ora</h3>
        <h4>Thanks for signing up!</h4>
        <p>We are about to take you through the process of creating your 'Bug-Out' plan.</p>
        <p>Here are a few key concepts:</p>
        <p>You can make a personal and/or group plan.</p>
        <p>In a personal plan you input addresses of your 'Safe Point' and 'Bug-Out bag'</p>
        <p>In a group plan you input the addresses of you groups 'Meeting Point' and a 'Safe Point' to go after you have met up with your group</p>
        <p>In both cases you select what items you will have stored in your 'Bug-Out bag'</p>
        <p>Safe Point: A safe location to get to in an emergency</p>
        <p>Meeting Point: A location to meet up with members of your group</p>
        <p>Bug-Out Bag: An emergency-kit containing your essentials. We will give you suggestions of what you might need</p>

        <form>
          <button onClick={this.handleSubmit.bind(this)}> Im Ready! </button>
        </form>
      </div>
    )
  }
}



module.exports = connect((state) => state)(Info)
