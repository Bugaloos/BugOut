const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const AntRectangle = require('../images/AntRectangle.png')
const App = (props) => {
  return (
    <div>
      <div className='mainNav'>
            <div id='titleButton'>
              <img src={AntRectangle} />
            </div>
      </div>
      <br />
      <br />
      {props.children}
    </div>
  )
}

module.exports = connect((state) => state)(App)
