import React from "react";

export default class Map extends React.Component {
	constructor(props) {
		super(props);
	}

	initMap(newProps){
		
		if(newProps===undefined){
	        var uluru = {lat: this.props.lat , lng: this.props.lng};
	        var zoom = this.props.zoom;
		}
		else{
	        var uluru = {lat: newProps.lat , lng: newProps.lng};
	        var zoom = newProps.zoom
		}

        var map = new google.maps.Map(this.map, {
          zoom: zoom,
          center: uluru,
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

        map.addListener('center_changed', function() {
          let cord = map.getBounds().toJSON()
          console.log(`East: ${cord.east} North: ${cord.north} West: ${cord.west} South: ${cord.south}`);
        });
	}


	render(){
	  return (
	  	<div>
			<div ref={ (map) => {this.map=map} } id="map"></div>
	    </div>
	  );
	}

	shouldComponentUpdate(){
		return false;
	}

	componentDidMount(){
		this.initMap();
	}

	componentWillReceiveProps(nextProps){
		this.initMap(nextProps);
	}

}
