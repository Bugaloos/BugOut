const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const reducer = require('./reducers')
const initialState = require('../state')
const MuiThemeProvider = require('material-ui/styles')

// Top Level Components
const App = require('./containers/app')
const Home = require('./containers/home')
const Users = require('./containers/users')
const Login = require('./containers/login')

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
  console.log('Index.js state log', store.getState())
})

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Home} />
          <Route path='/users' component={Users} />
          <Route path='/login' component={Login} />
        </Route>
      </Router>
    </Provider>
  )
}
// <MuiThemeProvider>
// </MuiThemeProvider>

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  const root = document.querySelector('#app')

  ReactDOM.render(
    <Root store={store} />,
    root
  )
})
