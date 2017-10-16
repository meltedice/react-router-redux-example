import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class RoomA extends Component {
  render() {
    return (
      <div className='RoomA'>
        <header className='App-header'>
          <h1 className='App-title'>Room A</h1>
        </header>
        <p className='App-intro'>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
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

export default RoomA
