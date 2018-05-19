import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
    <header className="contents contents--header">
        <Link to="/" className="someLogo">Logo</Link>
        <div className="mobile-only">button</div>
        <ul>
          <li><Link to="/search-game/">Search By Game</Link></li>
          <li><Link to="/live-map/">Search By Map</Link></li>
          <li><Link to="/region/">Search By Region</Link></li>
        </ul>
      </header>
    );
  }
}

export default Header;
