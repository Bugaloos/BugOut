const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

class OfflineDetails extends React.Component {

  handleSubmit () {
    this.props.router.push('/')
  }

  render () {
    return (
      <div>
        <h3>Offline Experience</h3>
        <p>In the case of an Emergency such as a natural disastah, it is possible your device
        will lose internet connection.</p>
        <p>In such a situation however, you will still be able to access your Individual or Group plans,
        view your safe point, meeting point, and cache locations.
        You will also be able post to your message board, where your messages will wait until connection is reastablished,
        allowing you to keep communicating with patchy internet connection.
        </p>
        <form>
          <button onClick={this.handleSubmit.bind(this)}> I get it already </button>
        </form>
      </div>
      //completeProfile is where OfflineDetails is being rendered for no particular reason. 
    )
  }
}



module.exports = connect((state) => state)(OfflineDetails)
