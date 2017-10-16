import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import './index.css'
import App from './containers/App'
import reducers from './reducers'
import registerServiceWorker from './registerServiceWorker'

const history = createHistory()

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer,
})

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

const store = createStore(reducer, enhancer)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
