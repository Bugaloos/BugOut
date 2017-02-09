const React = require('react')
const { connect } = require('react-redux')

function Messageboard(props) {
  return (
    <div>
      <h1>This is the container Messageboard component</h1>
    </div>
  )
}

module.exports = connect((state) => state)(Messageboard)
