const React = require('react')
const { connect } = require('react-redux')

function Group(props) {
  return (
    <div>
      <h1>This is the Group Component </h1>
    </div>
  )
}

module.exports = connect((state) => state)(Group)
