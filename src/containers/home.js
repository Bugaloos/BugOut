const React = require('react')
const { connect } = require('react-redux')
const Login = require('../components/login')
const Register = require('../components/register')
// If no active session is detected. This component will have text at the top explaining how the app works as well as visual example of the process of registering. Further down it will call the login and register components.

// If an active session is detected, this page will ???(redirect to profile? render profile)???

function Home (props) {
  return (
    <div className='homepage'>
      <h3>Make a plan that is ready when you need it</h3>
      < Register {...props} />
      < Login {...props} />
    </div>
  )
}

module.exports = connect((state) => state)(Home)
