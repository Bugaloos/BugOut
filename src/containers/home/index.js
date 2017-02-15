const React = require('react')
const { connect } = require('react-redux')
const YourProfile = require('../../components/yourProfile')
const NotLoggedIn = require('./notLoggedIn')
// If no active session is detected. This component will have text at the top explaining how the app works as well as visual example of the process of registering. Further down it will call the login and register components.

// If an active session is detected, this page will ???(redirect to profile? render profile)???

function Home (props) {
  return props.loggedIn
    ? <YourProfile />
    : <NotLoggedIn {...props} />
}

module.exports = connect((state) => state)(Home)
