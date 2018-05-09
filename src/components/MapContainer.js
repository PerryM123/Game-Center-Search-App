import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import axios from 'axios';

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      currentLocation: {},
      arcadeList: []
    };
    this.showCurrentPosition = this.showCurrentPosition.bind(this);

  }
  componentDidMount() {
    console.log("componentDidMount");
    axios.get('/arcadeData.json')
     .then((results) => {
      this.setState({
        arcadeList: results.data.arcades
      });
    });
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
  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };
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
  showCurrPos(google) {
    return (
      <Marker
        onClick={this.onMarkerClick}
        icon={{
          // url: "/map-icons/tshirt.svg",
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
  addMarker(google) {
    const arcadeList = this.state.arcadeList;
    console.log("addMarker: arcadeList");
    console.log(arcadeList);

    if (arcadeList) {
    const stuff = arcadeList.map((data, index) => {
    return (
      <Marker
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
    console.log("the stuff");
    console.log(stuff);
  return stuff;
  }
  }
  render() {
    const google=window.google
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    const sowhat = this.addMarker(google);
    console.log("sowhat2222");
    console.log(sowhat);
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
        <div className="herere">
        </div>
        <button onClick={this.showCurrentPosition}> Hello </button>
        <Map
          centerAroundCurrentLocation
          onClick={this.onMapClicked}
          google={this.props.google}
          zoom={14}>
          {
            this.state.currentLocation ? this.showCurrPos(google) : <p>nothingggg</p>
          }
          <Marker
            onClick={this.onMarkerClick}
            icon={{
              // url: "/map-icons/tshirt.svg",
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
              // url: "/map-icons/shorts.svg",
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(64, 64)
            }}
            name="HEY! Arcade"
            position={{ lat: 35.699024, lng: 139.771062 }}
            title="The marker`s title will appear as a tooltip."

          />

          {sowhat}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h2>{this.state.selectedPlace.name}</h2>
              {/*
              * React Question:
              * Should I just keep using sass loader with a stylesheet file
              * or
              * Should I just attach the css like below in the styletags?
              * or
              * Should I prepare to get used to using CSS Modules (similar to Vue's way of handling css??) ?
              */}
              <img style={{width: '100%'}} src="/images/arcadecovers/mikado-marker-thumbnail.jpg" />
              <a href="https://www.google.com">Link to Arcade Page</a>
              <a href="https://www.google.com">Google Maps Direct Link</a>
              <p>Description about the place here and here and here and here.</p>
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
