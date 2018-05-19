import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import SplashMenu from './SplashMenu';
import FindMenu from './FindMenu';
import LiveMap from './LiveMap';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Games from './Games';
import ContactUs from './ContactUs';
import Arcade from './Arcade';
import PageNotFound from './PageNotFound';

/*
* React Question 1:
* When should I use:
* 1)
* class Main extends Component {
*
* 2)
* const Main = () => (
*/

/*
* React Question 2:
* I do not know when I should be using props...
* Maybe use it for API calls?
* I have to figure out when the best time to use props...
*/
class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  getCounter() {
    return this.state.counter;
  }
  render() {
    return (
      <div>
        {/* Testing with Enzyme below!!!*/}
        {/*<button id="hello" onClick={this.onClickHandler}>
          Press Me: <span className="what">{ this.state.counter }</span>
        </button>*/}
        <Switch>
        {/*
          ReactJS Advice:
          Always end url with slash '/' to make it like /index.html
        */}
          <Route exact path='/' component={HomePage}/>
          <Route path='/find-menu/' component={FindMenu}/>
          <Route path='/live-map/' component={LiveMap}/>
          <Route path='/search-game/' component={Games}/>
          <Route path='/about-us/' component={AboutUs}/>
          <Route path='/contact-us/' component={ContactUs}/>
          <Route path='/arcade-info/' component={Arcade}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
