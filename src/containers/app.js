const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Loader = require('halogen/BounceLoader')
const Logout = require('../components/logout')
const antCircle = require('../images/AntNoCircle.png')

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
  console.log('display', display);

  return (
    <div>
      <div className='navBar'>
        <nav >
          <Link to='/'>
            <div id='maintitle'>
              <h1 id='mainTitleText'>Bug Out </h1>
              <img src={antCircle} />
            </div>
          </Link>
        </nav>
      </div>
      <br />
      <br />
      {display}
      <Logout {...props} />
    </div>
  )
}

module.exports = connect((state) => state)(App)
