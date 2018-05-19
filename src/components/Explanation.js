import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

class Explanation extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="contents contents--explanation contents--home-page-section">
        <h2 className="contents--home-page-section__section-title ">Why do I need this?</h2>
        <p>We are here to blah and  blah and blah and blah and blah and blah and blah and blah and </p>
        <p>We are here to blah and blah and blah and blah and  </p>
        <p>We are here to blah and blah and blah and blah and  blah and blah and blah and blah and blah and blah and blah and </p>
      </div>
    );
  }
}

export default Explanation;
