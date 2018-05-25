import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IcoMoon from './IcoMoon';

class SplashContents extends Component {
  render() {
    return (
      /*
      * React Question:
      * It seems if there are too much text in a title for tools, it will cause misalignment.
      * Should I create my own matchHeight function or use a library?
      */
      <div id="splash-contents" className="contents contents--splash-contents contents--home-page-section">
        <h2 className="contents--home-page-section__section-title">Search Now!</h2>
        {/*Tool_1*/}
        <div className="contents--splash-contents__tools">
          <Link className="contents--splash-contents__tools-link" to='/live-map/'>
          {/*
          *BEM Question:
          *When trying to add css to the child of an element after the 
          *Parent is hovered on, what is the best way to do it with
          *SCSS and BEM??
          *
          *Search in index.scss for: contents--splash-contents__icon 
          */}
      <IcoMoon name='icon-location'/>
            
            <h3 className="contents--splash-contents__details-title">Search for Arcade</h3>
            <p className="contents--splash-contents__text-content">syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig </p>  
          </Link>
          <Link className="contents--splash-contents__button" to='/live-map/'>Learn More</Link>
        </div>
        {/*Tool_1 END*/}
        {/*Tool_2*/}
        <div className="contents--splash-contents__tools">
          <Link className="contents--splash-contents__tools-link" to='/search-game/'>
            
      <IcoMoon name='icon-gamepad'/>
            
            <h3 className="contents--splash-contents__details-title">Search for Game</h3>
            <p className="contents--splash-contents__text-content">syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig </p>
          </Link>
          <Link className="contents--splash-contents__button" to='/search-game/'>Learn More</Link>
        </div>
        {/*Tool_2 END*/}
        {/*Tool_3*/}
        <div className="contents--splash-contents__tools">
          <Link className="contents--splash-contents__tools-link" to='/region/'>
            
      <IcoMoon name='icon-tv'/>
            
            <h3 className="contents--splash-contents__details-title">Search By Region</h3>
            <p className="contents--splash-contents__text-content">syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig syigsyig </p>
          </Link>
          <Link className="contents--splash-contents__button" to='/region/'>Learn More</Link>
        </div>
        {/*Tool_3 END*/}
      </div>
    );
  }
}

export default SplashContents;
