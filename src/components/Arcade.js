import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import ArcadePage from './ArcadePage';

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
        <Route exact path='/search-arcade/' component={ArcadePage}/>

        {/*<Redirect exact from="/arcade-info/" to="/find-menu/" />*/}

        {/*List of specific Arcade page*/}
        <Route path='/arcade-info/:arcade_id/' component={ArcadePage} />
      </Switch>
    );
  }
}

export default Arcade;
