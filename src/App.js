import React, { Component } from 'react';
import Main from './components/Main'
import './scss/index.scss';

class App extends Component {
  render() {
    return (
      <div>
        <header className="contents contents--header">
          <a href="/" className="someLogo">Logo</a>
          <ul>
            <li><a href="#">Find Game</a></li>
            <li><a href="#">Find Arcade</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </header>
        <Main />
        <footer className="contents contents--footer">
          <p>This is a footer</p>
          <a href="/">This is a footer LOGO</a>
        </footer>
      </div>
    );
  }
}

export default App;
