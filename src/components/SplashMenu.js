import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SplashMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionPosition: 0
    }
    this.buttonHandler = this.buttonHandler.bind(this);
  }
  componentDidMount() {
    window.addEventListener("load", this.findSectionPosition.bind(this));
    window.addEventListener("resize", this.findSectionPosition.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("load", this.findSectionPosition.bind(this));
    window.removeEventListener("resize", this.findSectionPosition.bind(this));
  }
  findSectionPosition() {
    const searchNowElement = document.getElementById('splash-contents');
    if (searchNowElement) {
      const rect = searchNowElement.getBoundingClientRect();
      const sectionPos = rect.top + window.scrollY;
      this.setState({
        sectionPosition: sectionPos
      });
    }
  }
  buttonHandler() {
    window.scroll({top: this.state.sectionPosition, left: 0, behavior: 'smooth' });
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
