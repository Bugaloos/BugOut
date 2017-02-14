const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

// This component will return a specific plan based upon the userID or groupID which it recives

function Group (props) {
  const { group } = props
  return (
    <div>
      <h3>Here are the groups you are part of</h3>
      <Link to={`/groups/${group.name}`}>
        <p>{group.name}</p>
      </Link>
    </div>
  )
}

module.exports = Group
