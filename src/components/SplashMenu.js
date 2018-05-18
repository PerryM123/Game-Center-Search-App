import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SplashMenu extends Component {
  render() {
    return (
      <div className="contents contents--splash-menu">
        <h2 className="contents--splash-menu__main-title">Welcome!</h2>
        <p className="contents--splash-menu__text-content">text text text text text text 
        text text text text </p>
        <Link to='/find-menu'>Go to next Screen</Link>
      </div>
    );
  }
}

export default SplashMenu;
