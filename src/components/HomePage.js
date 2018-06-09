import React, { Component } from 'react';
import HomeHeroSpace from './HomeHeroSpace';
import Explanation from './Explanation';
import SplashContents from './SplashContents';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeHeroSpace />
        <SplashContents />
        <Explanation />
      </div>
    );
  }
}

export default HomePage;
