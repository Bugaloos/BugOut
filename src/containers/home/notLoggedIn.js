const React = require('react')
const { connect, Link } = require('react-redux')
const LoginButton = require('./showLoginButton')
const FormShowing = require('./formShowing')

function NotLoggedIn (props) {
  console.log('this time for sure', props);
  return (
    <div>
      <div >
        <LoginButton />
      </div>
      <div className='mainComponent'>
        <h2 >Make a plan for you and your loved ones that is ready when you need it</h2>
        <FormShowing />
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(NotLoggedIn)
