import React, { Component } from 'react';
import MapArea from './MapArea';

class LiveMap extends Component {
  constructor(props) {
    console.log("LiveMap: constructor");
    super(props);
    this.state = {
      mapHeight: "",
      firstHeight: ""
    }
  }
  componentDidMount() {
    window.addEventListener("load", () => {
      this.setState({
        firstHeight: document.body.scrollHeight
      })
      this.getMapHeight();
    });
    window.addEventListener("resize", this.getMapHeight.bind(this));
    }
  componentWillUnmount() {
    window.removeEventListener("load", this.getMapHeight.bind(this));
    window.removeEventListener("resize", this.getMapHeight.bind(this));
  }
  getMapHeight() {
    const screenHeight = window.innerHeight;
    const contentsHeight = this.state.firstHeight;
    const mapHeight = screenHeight - contentsHeight;
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
