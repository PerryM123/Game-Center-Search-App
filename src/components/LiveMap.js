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
    this.setState({mapHeight: window.innerHeight - this.h2.clientHeight});
  }
  render() {
    console.log("LiveMap: render");
    return (
      <div ref={ div => { this.div = div; } } className="contents contents--live-map">
        <h2 ref={ h2 => { this.h2 = h2; } } className="contents--live-map__main-title">Livemap</h2>
        <MapArea mapHeight={this.state.mapHeight + 'px'}/>
      </div>
    );
  }
}

export default LiveMap;
