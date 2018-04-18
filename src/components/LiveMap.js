import React, { Component } from 'react';
import Maps from './Maps';

class LiveMap extends Component {
  render() {
    return (
      <div className="contents contents--live-map">
        <h2>Livemap</h2>
        <p>GOoogle maps here</p>
        <Maps />
      </div>
    );
  }
}

export default LiveMap;
