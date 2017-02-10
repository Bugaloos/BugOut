const React = require('react')
const { connect } = require('react-redux')

// If no active session is detected. This component will have text at the top explaining how the app works as well as visual example of the process of registering. Further down it will call the login and register components.

// If an active session is detected, this page will ???(redirect to profile? render profile)???

function Home (props) {
  return (
    <div className='homepage'>
      <h3>Make a plan for you and your loved ones that is ready when you need it</h3>
      <button onClick={() => props.dispatch({type: 'TOGGLE_ONLINE', online: false})}>Register</button>
      <button onClick={() => props.dispatch({type: 'TOGGLE_ONLINE', online: false})}>Login</button>
    </div>
  )
}

module.exports = connect((state) => state)(Home)
