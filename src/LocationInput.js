import React from "react";

export default class LocationInput extends React.Component {

	constructor(props) {
		super(props);
	}

  onClickCenter(){
    let lat = parseInt(this.lat.value)
    let lng = parseInt(this.lng.value)
    let location = { lat: lat, lng: lng}

    this.props.centerNewLocation(location)
  }


	
  render(){
      return (
      	<div className="LocationInput">
          <div></div>
          <p>Enter latitude and longitude to find new locations</p> 
      		<input className="npt" placeholder="Latitude: Min:-85 Max:85" ref={ (lat) => {this.lat=lat} } type="number" max="85" min="-85"/>
      		<input className="npt" placeholder="Longitude: Min:-180 Max:180" ref={ (lng) => {this.lng=lng} } type="number" max="180" min="-180"/>
          <button className="btn" onClick={ () => this.onClickCenter() } >Center</button>
        </div>
      );
  }
}
