const React = require('react')
const { connect } = require('react-redux')

// If no active session is detected. This component will have text at the top explaining how the app works as well as visual example of the process of registering. Further down it will call the login and register components.

// If an active session is detected, this page will ???(redirect to profile? render profile)???

function Home (props) {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the container home component</p>
      <button onClick={() => props.dispatch({type: 'TOGGLE_ONLINE', online: false})}>Toggle online</button>
    </div>
  )
}

module.exports = connect((state) => state)(Home)
