import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SplashMenu from './SplashMenu';
import FindMenu from './FindMenu';
import LiveMap from './LiveMap';
import SearchGame from './SearchGame';
import AboutUs from './AboutUs';
import Games from './Games';
import ContactUs from './ContactUs';
import ArcadeResults from './ArcadeResults';
import PageNotFound from './PageNotFound';

/*
* React Question:
* When should I use:
1)
class Main extends Component {

2)
const Main = () => (

*/
class Main extends Component {
  render() {
    return (
      <div>
        <Switch>
        {/*
          ReactJS Question:
          '/search-game' works but '/search-game/' does not...
        */}
          <Route exact path='/' component={SplashMenu}/>
          <Route path='/find-menu' component={FindMenu}/>
          <Route path='/live-map' component={LiveMap}/>
          <Route path='/search-game' component={Games}/>
          <Route path='/about-us' component={AboutUs}/>
          <Route path='/contact-us' component={ContactUs}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
