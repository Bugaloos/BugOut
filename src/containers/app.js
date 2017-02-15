const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const Loader = require('halogen/BounceLoader')
const Logout = require('../components/logout')
const antCircle = require('../images/AntNoCircle.png')
const AntRectangle = require('../images/AntRectangle.png')

const App = (props) => {
  const { dispatch, isLoading } = props
  const spinner = (
    <div className='spinner'>
      <Loader color="#593F62" size="150px" margin="4px"/>
    </div>
  )
  const display = isLoading
  ? spinner
  : props.children

  return (
    <div>
      <div className='mainNav'>
            <div id='titleButton'>
              <img src={AntRectangle} />
            </div>
      </div>
      <br />
      <br />
      {display}
    </div>
  )
}

module.exports = connect((state) => state)(App)
