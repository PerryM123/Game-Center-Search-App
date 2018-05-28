import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SearchGame from './SearchGame';
import ArcadeResults from './ArcadeResults';
import GameSearchContainer from './../container/GameSearchContainer';

class Games extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/search-game/' component={GameSearchContainer}/>
        <Route path='/search-game/:id/' component={ArcadeResults} />
      </Switch>
    );
  }
}

export default Games;
