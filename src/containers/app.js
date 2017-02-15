const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const antCircle = require('../images/AntNoCircle.png')
const App = (props) => {
  return (
    <div>
      <div className='mainNav'>
        <nav >
          <Link to='/'>
            <div id='titleButton'>
              <h1 id='titleButtonText'>Bug Out </h1>
              <img src={antCircle} />
            </div>
          </Link>
        </nav>
      </div>
      <br />
      <br />
      {props.children}
    </div>
  )
}

module.exports = connect((state) => state)(App)
