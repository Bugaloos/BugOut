const React = require('react')
const { connect } = require('react-redux')
const Messageboard = require('../components/messageboard')


function Group(props) {
  return (
    <div>
      <h1>This is the Group Component</h1>
      <p>This is the main description of the plan for the group</p>
      <Messageboard router={props.router} />
    </div>
  )
}




module.exports = connect((state) => state)(Group)
