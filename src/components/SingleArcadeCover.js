import React, { Component } from 'react';
import axios from 'axios';
import loading_logo from './../images/loading_icon.png';

class SingleArcadeCover extends Component {
	constructor(props) {
		super(props);
	}
  render() {
    return (
      <div className="contents contents--cover">
        <h2 className="contents--search-arcade-cover__main-title">Selected: {this.props.selectedArcade}</h2>
        <p className="contents--search-arcade-cover__text-content">words words words words words words words words </p>
      </div>
    );
  }
}

export default SingleArcadeCover;

