import React, { Component } from 'react';
import MapContainer from './MapContainer';

class LiveMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowHeight: window.innerHeight
    }


  }
  componentDidMount() {
    console.log("this.cool");
    console.log(this.cool.innerHeight);
  }
  render() {
    return (
      <div className="contents contents--live-map" ref="cool">
      {
        console.log("this.elemHeight")
      }
      {
        console.log(this.elemHeight)
      }
        <h2 className="contents--live-map__main-title">Livemap</h2>
        {/*<Maps />*/}
        <MapContainer />
      </div>
    );
  }
}

export default LiveMap;
