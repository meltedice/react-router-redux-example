import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Route, Switch, Link } from 'react-router-dom'
import thunk from 'redux-thunk'

import './index.css'
// import App from './containers/App'
import './containers/App.css'
import Home from './containers/Home'
import RoomA from './containers/RoomA'
import RoomB from './containers/RoomB'
import registerServiceWorker from './registerServiceWorker'

import reducers from './reducers'

const history = createHistory()

const myLogger = store => next => action => {
  console.log('myLogger: dispatching', action)
  const result = next(action)
  console.log('myLogger: next state', store.getState())
  return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const appliedMiddleware = applyMiddleware(
  myLogger,
  routerMiddleware(history),
  thunk
)
const enhancer = composeEnhancers(appliedMiddleware)

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
})

const store = createStore(reducer, enhancer)

class AppContainer extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div className='App'>
        <div className='Links'>
          <ul>
            <li><button onClick={() => { store.dispatch(push('/')) }}>Home</button></li>
            <li><button onClick={() => { this.props.dispatch(push('/rooma')) }}>Room A</button></li>
            <li><button onClick={() => dispatch(push('/roomb'))}>Room B</button></li>

            <li><Link to='/'>Home (Link)</Link></li>
            <li><Link to='/rooma'>Room A (Link)</Link></li>
            <li><Link to='/roomb'>Room B (Link)</Link></li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/rooma' component={RoomA} />
          <Route path='/roomb' component={RoomB} />
        </Switch>
      </div>
    )
  }
}

const App = connect(state => ({
  // location: state.location,
  location: state.routing.location,
}))(AppContainer)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
