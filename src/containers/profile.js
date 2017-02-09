const React = require('react')
const { connect } = require('react-redux')

function Profile(props) {
  return (
    <div>
      <h1>This is the Profile container component</h1>
    </div>
  )
}

module.exports = connect((state) => state)(Profile)
