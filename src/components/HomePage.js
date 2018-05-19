import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SplashMenu from './SplashMenu';
import SplashContents from './SplashContents';

class HomePage extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <SplashMenu />
        <SplashContents />
      </div>
    );
  }
}

export default HomePage;
