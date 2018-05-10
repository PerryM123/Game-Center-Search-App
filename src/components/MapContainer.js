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
      arcadeList: [],
      selectedArcade: ""
    };
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
  findSelectedArcade() {
    console.log("~~~~~~~~~~~~~~~findSelectedArcade()~~~~~~~~~~~~~~~~~~~~");
    const filtered = this.state.arcadeList.filter( item => this.state.selectedPlace.name === item.arcade_name );
    console.log("filtered"); // debug
    console.log(filtered); // debug
    return filtered;
  }
  onMarkerClick(props, marker, e) {
    console.log("~~~~~~~~~~~~~~~onMarkerClick()~~~~~~~~~~~~~~~~~~~~");
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
    console.log("onMarkerClick: selectedArcade");
    console.log(this.state.selectedArcade);
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
    console.log("~~~~~~~~~~~~~~~showCurrPos()~~~~~~~~~~~~~~~~~~~~");
    return (
      <Marker
        onClick={this.onMarkerClick}
        icon={{
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
    console.log("~~~~~~~~~~~~~~~addMarkers()~~~~~~~~~~~~~~~~~~~~");
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
      console.log("YES!");
      return (
        <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
      >
        <div className="info-window">
          <h2 className="info-window__title">{this.state.selectedPlace.name}</h2>
          <img className="info-window__thumbnail" src={selectedArcade.arcade_img_thumbnail} />
          <p>{selectedArcade.description}</p>
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
    console.log("~~~~~~~~~~~~~~~render()~~~~~~~~~~~~~~~~~~~~");
    const google=window.google
    if (!this.props.google) {
      return <div>Loading...</div>;
    }
    const mapMarkers = this.addMarkers(google);
    const infoBoxes = this.addInfoWindows(google);
    // console.log("markers2222"); // debugging
    // console.log(mapMarkers); // debugging
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

    console.log("before");
    if ( this.state.selectedArcade ) {
      const selectedArcade = this.state.selectedArcade;
      console.log("12selectedArcade:");
      console.log(selectedArcade);
    }
    const arcadeList = this.state.arcadeList;
    console.log("23arcadeList");
    console.log(arcadeList);
    // console.log("addMarker: arcadeList"); // debugging
    // console.log(arcadeList); // debugging
    return (
      <div className="the-map">
        <div className="herere">
        </div>
        <Map
          centerAroundCurrentLocation
          onClick={this.onMapClicked}
          google={this.props.google}
          zoom={14}>
          { this.state.currentLocation ? this.showCurrPos(google) : <p>nothingggg</p> }
          { mapMarkers }
          { infoBoxes }
      
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo",
  v: "3.30"
})(MapContainer);
