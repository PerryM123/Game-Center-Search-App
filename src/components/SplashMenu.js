import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SplashMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 0
    }
    this.buttonHandler = this.buttonHandler.bind(this);
  }
  buttonHandler() {
    const searchNowSection = document.getElementById('splash-contents');
    const rect = searchNowSection.getBoundingClientRect();
    window.scroll({top: rect.top, left: 0, behavior: 'smooth' });
    this.setState({
      test: rect.top
    });
  }
  render() {
    return (
      <div className="contents contents--splash-menu">
        <h2 className="contents--splash-menu__main-title">Game Center Search</h2>
        <p className="contents--splash-menu__text-content">Having trouble finding the right arcade for your fighting game needs?</p>
        <p className="contents--splash-menu__text-content">We are here to help!</p>
        <a onClick={this.buttonHandler} className="contents--splash-menu__button" to='/find-menu/'>Find Arcades Now!</a>
      </div>
    );
  }
}

export default SplashMenu;
