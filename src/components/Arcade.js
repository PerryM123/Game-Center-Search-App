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

        {/*<Route exact path='/arcade-info/' component={Home}/>*/}
          <Redirect exact from="/arcade-info/" to="/find-menu/" />
        <Route path='/arcade-info/:arcade_id' component={ArcadePage} />
      </Switch>
    );
  }
}

export default Arcade;
