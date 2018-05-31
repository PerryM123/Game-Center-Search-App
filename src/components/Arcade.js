import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import ArcadeSearchContainer from './../container/ArcadeSearchContainer';
import ArcadeSingle from './../components/ArcadeSingle';

class Arcade extends Component {
  render() {
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

        {/*list of all arcades*/}
        <Route exact path='/search-arcade/' component={ArcadeSearchContainer}/>

        {/*<Redirect exact from="/arcade-info/" to="/find-menu/" />*/}

        {/*List of specific Arcade page*/}
        <Route path='/search-arcade/:arcade_id/' component={ArcadeSingle} />
      </Switch>
    );
  }
}

export default Arcade;
