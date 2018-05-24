import React, { Component } from 'react';
import SplashMenu from './SplashMenu';
import Explanation from './Explanation';
import SplashContents from './SplashContents';
import FontAwesome from 'react-fontawesome';

class HomePage extends Component {
  render() {
    return (
      <div>
      <FontAwesome
        name='gamepad'
        size='5x'
      />
        <SplashMenu />
        <SplashContents />
        <Explanation />
      </div>
    );
  }
}

export default HomePage;
