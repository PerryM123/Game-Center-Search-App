import React, { Component } from 'react';
import FindGame from './FindGame';
import { Link } from 'react-router-dom';

class SplashMenu extends Component {
  render() {
    return (
      <div>
        <Link to='/find-game'>Go to next Screen</Link>
      </div>
    );
  }
}

export default SplashMenu;
