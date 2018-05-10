import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ArcadePage from './ArcadePage';

class Arcade extends Component {
  render() {
    const ourGame = this.props.match.params.arcade_id; // game in parameter

    return (
      <Switch>
        {/*
        * React Question:
        * How do I handle users trying to enter
        * only /arcade-info/ into their browsers?
        *
        * Just lead them to a 404 page? Or just jump to the Home page?
        * 
        * Mayb
        */}

        {/*<Route exact path='/arcade-info/' component={Home}/>*/}
        <Route path='/arcade-info/:arcade_id' component={ArcadePage} />
      </Switch>
    );
  }
}

export default Arcade;
