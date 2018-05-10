import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SearchGame from './SearchGame';
import ArcadeResults from './ArcadeResults';

class Games extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/search-game' component={SearchGame}/>
        <Route path='/search-game/:id' component={ArcadeResults} />
      </Switch>
    );
  }
}

export default Games;
