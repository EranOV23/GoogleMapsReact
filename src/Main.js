import React from "react";

import Map from "./Map"
import LocationInput from "./LocationInput"
import Cities from "./Cities"
import Zoom from "./Zoom"


export default class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			lat: 32.0042938,
			lng: 34.7615399,
			zoom: 10,
		}		
	}

	centerNewLocation(location){
        this.setState({
			lat: location.lat,
			lng: location.lng,
        })
	}

	setNewZoom(zoom){
		this.setState({
			zoom: zoom,
		})
	}

  render(){
      return (
      	<div>
      		<LocationInput centerNewLocation={this.centerNewLocation.bind(this)} />
      		<Cities centerNewLocation={this.centerNewLocation.bind(this)} />
      		<Zoom setNewZoom={this.setNewZoom.bind(this)} />
      		<Map lat={this.state.lat} lng={this.state.lng} zoom={this.state.zoom} />
        </div>
      );
  }
}
