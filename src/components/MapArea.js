import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import axios from 'axios';
import PropTypes from 'prop-types';
import configFile from './gmaps_api_key/config.json';
import genzaichiIcon from './../images/genzaichi-pin.png';

export class MapArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: "",
      showingInfoWindow: false,
      /*
      * React Questions
      * How do I set default for states? Is this appropriate? If not it runs an error.
      * Or should these be props? But they dynamic and may change(??)
      *
      * I still don't know when to use props...
      */
      activeMarker: {"":""},
      selectedPlace: {"":""},
      currentLocation: {"":""},
      arcadeList: [""],
      selectedArcade: "default"
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }
  componentDidMount() {
    console.log("MapArea: componentDidMount");
    this.getCurrentMapPosition();
    const milliseconds = 15000;
    axios.get('/arcadeData.json')
     .then((results) => {
      this.setState({
        arcadeList: results.data.arcades
      });
    });
    let count = 0; // debugging
    this.state.timer = setInterval(() => {
      this.getCurrentMapPosition();
      console.log("count: " + count); // debugging
      count++; // debugging
    }, milliseconds); 
  }
  componentWillMount() {
    console.log("MapArea: componentWillMount");
  }
  componentWillUnmount() {
    console.log("MapArea: componentWillUnmount");
    clearInterval(this.state.timer);
  }
  getCurrentMapPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log("setInterval");
      console.log("================");
      console.log("position.coords.latitude: " + position.coords.latitude);
      console.log("position.coords.longitude: " + position.coords.longitude);
      console.log("================");
      
      this.setState({
        currentLocation: {
          lat: position.coords.latitude,
          long: position.coords.longitude
        }
      });
    });
  }
  findSelectedArcade() {
    console.log("MapArea: findSelectedArcade()");
    const filtered = this.state.arcadeList.filter( item => this.state.selectedPlace.name === item.arcade_name );
    console.log("filtered"); // debug
    console.log(filtered); // debug
    return filtered;
  }
  onMarkerClick(props, marker, e) {
    console.log("MapArea: onMarkerClick()");
    /*
    * FIXME:
    * Calling setState twice in a row doesn't seem correct here... Find a better solution
    * The Idea: On click set the selectedPlace, then use the selectPlace value to get the arcade info
    */
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    this.setState({
      selectedArcade: this.findSelectedArcade()
    });
  }
  /*
  * React Question:
  * When should I use the arrow function instead of the normal function???
  * If this function is NOT an arrow function, there's errors...
  */
  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };
  showCurrPos(google) {
    console.log("MapArea: showCurrPos()");
    return (
      <Marker
        onClick={this.onMarkerClick}
        icon={{
          url: genzaichiIcon,
          anchor: new google.maps.Point(32, 32),
          scaledSize: new google.maps.Size(64, 64)
        }}
        name="Current"
        position={{
          lat: this.state.currentLocation.lat,
          lng: this.state.currentLocation.long
        }}
        title="The marker`s title will appear as a tooltip."

      />
    )
  }
  addMarkers(google) {
    console.log("MapArea: addMarkers()");
    const arcadeList = this.state.arcadeList;
    if (arcadeList) {
      const markers = arcadeList.map((data, index) => {
      return (
        <Marker
          key={index}
          onClick={this.onMarkerClick}
          icon={{
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(64, 64)
          }}
          name={data.arcade_name}
          position={{
            lat: data.latt,
            lng: data.long
          }}
          title="The marker`s title will appear as a tooltip."
        />
      )
      });
    return markers;
    }
  }
  addInfoWindows(google) {
    console.log("addInfoWindows");
    const selectedArcade = this.state.selectedArcade[0];
    if (selectedArcade) {
      return (
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
      >
        <div className="info-window">
          <h2 className="info-window__title">{this.state.selectedPlace.name}</h2>
          <div className="info-window__thumbnail"><img src={selectedArcade.arcade_img_thumbnail} alt="arcade window" /></div>
          <p className="info-window__description">{selectedArcade.description}</p>
          <div className="info-window__button-area">
            <a href={"/arcade-info/" + selectedArcade.arcade_id}> Arcade link </a>
            <a href={selectedArcade.gmaps_link}>Google Maps Direct Link</a>
          </div>
        </div>
      </InfoWindow>
      )
    }
  }
  render() {
    console.log("MapArea: render()");
    const google = window.google;
    if (!this.props.google) {
      return <div>Loading...</div>;
    }
    const mapMarkers = this.addMarkers(google);
    const infoBoxes = this.addInfoWindows(google);
    return (
      <div className="the-map" style={{height: this.props.mapHeight}}>
        <Map
          centerAroundCurrentLocation
          onClick={this.onMapClicked}
          google={this.props.google}
          zoom={14}
          gestureHandling='greedy'>
          { this.state.currentLocation ? this.showCurrPos(google) : <p>nothingggg</p> }
          { mapMarkers }
          { infoBoxes }
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: configFile.GMAPS_API_KEY,
  v: "3.30"
})(MapArea);

/*
* React Question:
* How can I put this in the top of the component?
*/
MapArea.propTypes = {
  mapHeight: PropTypes.string.isRequired
};