import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      currentLocation: {}
    };
    this.showCurrentPosition = this.showCurrentPosition.bind(this);

  }
  componentDidMount() {
    console.log("componentDidMount");
    if (this.showCurrentPosition() ){
      console.log("YES");
    } else {

      console.log("NO");
    }
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  showCurrentPosition() {
    console.log("showCurrentPosition now");
    const map = this.map;
    console.log("map: " + map);
    const curr = this.state.currentLocation;
    const google = this.props.google;
    const maps = google.maps;

    if (map) {
        console.log("YES map time");
        let center = new maps.LatLng(curr.lat, curr.long);
        map.panTo(center);
    } else {
        console.log("NO map time");
    }
  }
  render() {
    const google=window.google
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          currentLocation: {
            lat: position.coords.latitude,
            long: position.coords.longitude
          }
        });
      });
    } else {
      // Browser doesn't support Geolocation
      alert("error");
    }


    return (
      <div className="the-map">
        <button onClick={this.showCurrentPosition}> Hello </button>
        <Map centerAroundCurrentLocation google={this.props.google} zoom={14}>
          <Marker
            onClick={this.onMarkerClick}
            icon={{
              url: "/map-icons/tshirt.svg",
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(64, 64)
            }}
            name="Mikado"
        position={{ lat: 35.7127351, lng: 139.7034548 }}
        title="The marker`s title will appear as a tooltip."

          />
          <Marker
            onClick={this.onMarkerClick}
            icon={{
              url: "/map-icons/shorts.svg",
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(64, 64)
            }}
            name="HEY! Arcade"
        position={{ lat: 35.699024, lng: 139.771062 }}
        title="The marker`s title will appear as a tooltip."

          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
  v: "3.30"
})(MapContainer);
