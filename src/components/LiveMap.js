import React, { Component } from 'react';
import MapContainer from './MapContainer';

class LiveMap extends Component {
  render() {
    return (
      <div className="contents contents--live-map">
        <h2>Livemap</h2>
        <p>GOoogle maps here</p>
        {/*<Maps />*/}
        <MapContainer />
      </div>
    );
  }
}

export default LiveMap;
