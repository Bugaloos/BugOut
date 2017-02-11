const React = require('react')
const { connect } = require('react-redux')

function BugOutInventory (props) {
  return (
    <div>
      <h1>This is the bug out Inventory Component </h1>
      <form>
      
      </form>
    </div>
  )
}

module.exports = connect((state) => state)(BugOutInventory)
