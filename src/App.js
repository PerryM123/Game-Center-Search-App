import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from './components/Main';
import './scss/index.scss';

class App extends Component {
  render() {
    return (
      <div>
        <header className="contents contents--header">
          <Link to="/" className="someLogo">Logo</Link>
          <ul>
            <li><Link to="#">Find Game</Link></li>
            <li><Link to="#">Find Arcade</Link></li>
            <li><Link to="#">About Us</Link></li>
          </ul>
        </header>
        <Main />
        <footer className="contents contents--footer">
          <p>This is a footer</p>
          <Link to="/">This is a footer LOGO</Link>
        </footer>
      </div>
    );
  }
}

export default App;
