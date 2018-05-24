import React, { Component } from 'react';
import MapArea from './MapArea';

class LiveMap extends Component {
  constructor(props) {
    console.log("LiveMap: constructor");
    super(props);
    this.state = {
      mapHeight: ""
    }
  }
  componentWillMount() {
    console.log("LiveMap: componentDidMount");

  }
  componentDidMount() {
    this.getMapHeight();
    this.setState({mapHeight: this.getMapHeight()});
  }

  getMapHeight() {
    const screenHeight = window.innerHeight;
    const contentsHeight = document.body.scrollHeight;
    return (screenHeight - contentsHeight);
  }
  render() {
    console.log("LiveMap: render");
    return (
      <div className="contents contents--live-map">
        <h2 className="contents--live-map__main-title">Livemap</h2>
        <MapArea mapHeight={this.state.mapHeight + 'px'}/>
      </div>
    );
  }
}

export default LiveMap;
