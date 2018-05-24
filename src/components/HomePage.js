import React, { Component } from 'react';
import SplashMenu from './SplashMenu';
import Explanation from './Explanation';
import SplashContents from './SplashContents';

class HomePage extends Component {
  render() {
    return (
      <div>
        <SplashMenu />
        <SplashContents />
        <Explanation />
      </div>
    );
  }
}

export default HomePage;
