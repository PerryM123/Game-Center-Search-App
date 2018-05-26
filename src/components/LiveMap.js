import React, { Component } from 'react';
import MapArea from './MapArea';

class LiveMap extends Component {
  constructor(props) {
    console.log("LiveMap: constructor");
    super(props);
    this.state = {
      mapHeight: "",
      contentsHeight: 0
    }
    this.getMapHeight = this.getMapHeight.bind(this);
  }
  componentDidMount() {
    console.log("LiveMap: componentDidMount");
    window.addEventListener("resize", this.getMapHeight.bind(this));
    this.setState({
      contentsHeight: document.body.scrollHeight,
      loadCount: 1
    }, this.getMapHeight);
  }
  componentWillUnmount() {
    console.log("LiveMap: componentWillUnmount");
    window.removeEventListener("resize", this.getMapHeight.bind(this));
  }
  getMapHeight() {
    const screenHeight = window.innerHeight;
    const mapHeight = screenHeight - this.state.contentsHeight;
    this.setState({
      mapHeight: mapHeight
    });
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
