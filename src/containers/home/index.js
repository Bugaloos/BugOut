const React = require('react')
const { connect } = require('react-redux')
const NotLoggedIn = require('./notLoggedIn')
const Profile = require('../../components/yourProfile')

function Home (props) {
  return props.loggedIn
  ? <Profile {...props} />
  : <NotLoggedIn {...props} />
}

module.exports = connect((state) => state)(Home)
