import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from './../images/header-icon.png'; // should this be in the public????

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      breakpoint: 768 // there has to be a better way to handle this...
    }
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }
  handleOverlayClick() {
    if (window.innerWidth > this.state.breakpoint) return;
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  handleMenuClick() {
    if (window.innerWidth > this.state.breakpoint) return;
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  render() {
    return (
    <header className="contents contents--header">
      <Link to="/" className="someLogo"><img src={ headerLogo } /></Link>
      <div className="mobile-menu" onClick={this.handleMenuClick}><p>MENU</p></div>
      <div className={ this.state.showMenu ? 'overlay overlay--appear' : 'overlay' } onClick={this.handleOverlayClick}>
        <div className={ this.state.showMenu ? 'testing testing--appear' : 'testing' }>
          <ul className="list">
            <li><Link to="/search-game/">Search By Game</Link></li>
            <li><Link to="/live-map/">Search By Map</Link></li>
            <li><Link to="/region/">Search By Region</Link></li>
          </ul>
          <div className="mobile-only">
            <div className="close-button">
              CLOSE ME
            </div>
          </div>    
        </div>
      </div>
    </header>
    );
  }
}

export default Header;
