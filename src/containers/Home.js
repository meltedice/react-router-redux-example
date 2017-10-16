import React, { Component } from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/rooma'>Room A</Link></li>
          <li><Link to='/roomb'>Room B</Link></li>
        </ul>
      </div>
    )
  }
}

export default Home
