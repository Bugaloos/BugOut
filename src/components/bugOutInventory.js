const React = require('react')
const { connect } = require('react-redux')

function BugOutInventory (props) {
  return (
    <div>
      <h1>This is the bug out Inventory Component </h1>
      <ul>
        <li>Marmite</li>
        <li>Underwear</li>
        <li>Dog food</li>
      </ul>
      <button onClick={() => dispatch({type:'UPDATE_USER_CACHE', payload: })}>Submit</button>
    </div>
  )
}

module.exports = connect((state) => state)(BugOutInventory)
