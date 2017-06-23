import React from "react";


const CitiesArr = [
    { name: "NewYork", lat: 40.712784, lng: -74.005941},
    { name: "Paris", lat: 48.856614, lng: 2.352222},
    { name: "Bangkok", lat: 13.756331, lng: 100.501765},
    { name: "TelAviv", lat:32.0042938,lng:34.7615399},
];

export default class Cities extends React.Component{

	onClickCenter(city){

		let location = {lat: city.lat, lng: city.lng};
		this.props.centerNewLocation(location)
	}

	render(){
		return(
			<div className="cities">
                { CitiesArr.map( (city, i) => <button key={i} className="btn" onClick={()=>this.onClickCenter(city)}>{ city.name }</button> ) }	
			</div>
		)
	}
}
