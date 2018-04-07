import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SplashMenu from './../components/SplashMenu';
import FindGame from './../components/FindGame';
import LiveMap from './../components/LiveMap';

class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={SplashMenu}/>
          <Route path='/find-game' component={FindGame}/>
          <Route path='/live-map' component={LiveMap}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
