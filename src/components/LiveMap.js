import React, { Component } from 'react';
import MapContainer from './MapContainer';

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
    console.log("this.div.clientHeight: " + this.div.clientHeight);
    console.log("window.innerHeight: " + window.innerHeight);
    console.log("this.h2.clientHeight: " + this.h2.clientHeight);
    this.setState({mapHeight: window.innerHeight - this.h2.clientHeight});
  }
  render() {
    return (
      <div ref={ div => { this.div = div; } } className="contents contents--live-map">
      {
        console.log("this.elemHeight")
      }
      {
        console.log(this.elemHeight)
      }
    
        <h2 ref={ h2 => { this.h2 = h2; } } className="contents--live-map__main-title">Livemap</h2>
        {/*<Maps />*/}
        <MapContainer mapHeight={this.state.mapHeight + 'px'}/>
      </div>
    );
  }
}

export default LiveMap;
