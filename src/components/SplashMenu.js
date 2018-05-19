import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SplashMenu extends Component {
  render() {
    return (
      <div className="contents contents--splash-menu">
        <h2 className="contents--splash-menu__main-title">Game Center Search</h2>
        <p className="contents--splash-menu__text-content">Having trouble finding the right arcade for your fighting game needs?</p>
        <p className="contents--splash-menu__text-content">We are here to help!</p>
        <Link className="contents--splash-menu__button" to='/find-menu'>Find Arcades Now!</Link>
      </div>
    );
  }
}

export default SplashMenu;
