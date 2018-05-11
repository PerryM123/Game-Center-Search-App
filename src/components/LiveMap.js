import React, { Component } from 'react';
import MapContainer from './MapContainer';

class LiveMap extends Component {
  constructor(props) {
    console.log("LiveMap: constructor");
    super(props);
    this.state = {
      windowHeight: window.innerHeight
    }


  }
  componentWillMount() {
    console.log("LiveMap: componentDidMount");
    const node = this.refs.clientHeight;
    console.log("node");
    console.log(node);

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
