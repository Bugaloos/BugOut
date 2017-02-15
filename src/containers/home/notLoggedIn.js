const React = require('react')
const { connect, Link } = require('react-redux')
const LoginButton = require('./showLoginButton')
const FormShowing = require('./formShowing')

function NotLoggedIn (props) {
  return (
    <div>
      <div >
        <LoginButton />
      </div>
      <div className='mainComponent'>
        <h2>In the case of an emergency, you and your loved ones will want to be prepared,
        and Bug Out is here to help!</h2>

        <p>Here are a few key concepts:</p>
        <p>You can make a personal and/or group plan to aid you in an emergency.</p>
        <p>In both plans you will input the addresses of your 'Meeting Point' and 'Safe point',
        which will appear on a map for you to refer to, regardless of whether or not you have
        internet connection.</p>
        <p>Through Bug Out you can also message people if they are in your group,
        even if you have limited or no internet connection!</p>
        <p>Messages posted to your group message board will wait until connection is restored,
        and send as soon as possible, allowing you to communicate more easily in an emergency scenario.</p>

        <FormShowing {...props} />
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(NotLoggedIn)
