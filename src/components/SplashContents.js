import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

class SplashContents extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="contents contents--splash-contents">
        <h2 className="contents--splash-contents__section-title">Search Now!</h2>
        {/*Tool_1*/}
        <div className="contents--splash-contents__tools">
          <div className="contents--splash-contents__icon"></div>
          <h3 className="contents--splash-contents__details-title">Title</h3>
          <p className="contents--splash-contents__text-content">syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig </p>
        </div>
        {/*Tool_1 END*/}
        {/*Tool_2*/}
        <div className="contents--splash-contents__tools">
          <div className="contents--splash-contents__icon"></div>
          <h3 className="contents--splash-contents__details-title">Title</h3>
          <p className="contents--splash-contents__text-content">syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig </p>
        </div>
        {/*Tool_2 END*/}
        {/*Tool_3*/}
        <div className="contents--splash-contents__tools">
          <div className="contents--splash-contents__icon"></div>
          <h3 className="contents--splash-contents__details-title">Title</h3>
          <p className="contents--splash-contents__text-content">syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig </p>
        </div>
        {/*Tool_3 END*/}
      </div>
    );
  }
}

export default SplashContents;
