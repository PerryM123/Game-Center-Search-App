import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arcadeData: "",
      gamesList: [""]
    }
  }
  render() {
    return (
      <div class="actual-map">
        this is the map
      </div>
    );
  }
}

export default Maps;
