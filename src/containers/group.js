const React = require('react')
const { connect } = require('react-redux')

// This container will have a text about the groups plan based upon the groupsID and will also call the messageboard component using the groupsID.

// Along the side of this component will be a list of all the users who are part of this group based on searching the database for ???

function Group (props) {
  return (
    <div>
      <h1>This is the Group Component </h1>
    </div>
  )
}

module.exports = connect((state) => state)(Group)
