const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

const App = (props) => {
  return (
    <div>
      <div className='navBar'>
        <nav>
          <h1 id='maintitle'> Bug Out</h1>
          <img src={'http://placehold.it/400x20&text=slide1'} alt="boohoo" className="img-responsive"/>
        </nav>
      </div>
      <br />
      <br />
      {props.children}
    </div>
  )
}

module.exports = connect((state) => state)(App)
