const React = require('react')
const ReactDOM = require('react-dom')
const { Provider } = require('react-redux')
const { createStore, applyMiddleware, compose } = require('redux')
const createHistory = require('history').createHashHistory
const { Router, Route, IndexRoute, hashHistory } = require('react-router')
const { persistStore, autoRehydrate } = require('redux-persist')

const reducer = require('./reducers')
const initialState = require('../state')
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default

require('dotenv').load()

const injectTapEventPlugin = require('react-tap-event-plugin')

// Top Level Components
const App = require('./containers/app')
const Home = require('./containers/home')
const Group = require('./containers/group')
const Profile = require('./components/yourProfile')
const Plan = require('./components/plan')
const Login = require('./containers/home/loginForm')
const Register = require('./containers/home/register')
const CreatePlan = require('./containers/createPlan')
const CreateGroup = require('./components/yourProfile/groupNew')

const OfflineDetails = require('./components/offlineDetails')

const Info = require('./components/info')


const store = createStore(
  reducer,
  undefined,
  compose(
    applyMiddleware(),
    autoRehydrate()
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
persistStore(store, {
  blacklist: [
    'authErr',
    'group',
    'showingComponent',
    'plan',
    'loggedIn'
  ]
})
injectTapEventPlugin()

store.subscribe(() => {
  console.log('Index.js state log', store.getState())
})

const Root = ({store}) => {
  return (
    <MuiThemeProvider>
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />

            <Route path='/users/:id' component={Profile} />
            <Route path='/users/:id/edit' component={Profile} />

            <Route path='/groups' component={Group} />
            <Route path='/groups/:id' component={Group} />
            <Route path='/groups/:id/new' component={Group} />
            <Route path='/groups/:id/edit' component={Group} />

            <Route path='/plans/:id' component={Plan} />
            <Route path='/plans/:id/new' component={Plan} />
            <Route path='/plans/:id/edit' component={Plan} />
            <Route path='/creategroup' component={CreateGroup} />
            <Route path='/createplan' component={CreatePlan} />

            <Route path='/info' component={Info} />

          </Route>
        </Router>
      </Provider>
    </MuiThemeProvider>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded')
  const root = document.querySelector('#app')

  ReactDOM.render(
    <Root store={store} />,
    root
  )
})

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
}
