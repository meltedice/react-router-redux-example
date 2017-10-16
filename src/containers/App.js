import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { Route, Switch, Link } from 'react-router-dom'
import './App.css'
import Home from './Home'
import RoomA from './RoomA'
import RoomB from './RoomB'

class App extends Component {
  render() {
    const { dispatch } = this.props
    return (
      <div className='App'>
        <div className='Links'>
          <ul>
            <li><button onClick={() => { dispatch(push('/')) }}>Home</button></li>
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

export default connect(state => ({
  // location: state.location,
  location: state.routing.location,
}))(App)
