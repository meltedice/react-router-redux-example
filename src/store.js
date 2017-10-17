import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import reducers from './reducers'

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

export default function createFinalStore(history) {
  const appliedMiddleware = applyMiddleware(
    myLogger,
    routerMiddleware(history),
    thunk
  )
  const enhancer = composeEnhancers(appliedMiddleware)

  return createStore(reducer, enhancer)
}
