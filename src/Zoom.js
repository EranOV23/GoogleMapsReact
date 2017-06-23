import React from "react";

export default class Zoom extends React.Component{

	constructor(props) {
		super(props);
	}

	onClickZoom(e){
		let zoom = parseInt(this.zoom.value)
		console.log(zoom)
		this.props.setNewZoom(zoom)
	}

	render(){
		return(
			<div className="zoom">
	      		<input className="npt" placeholder="set zoom" 
	      			type="number" max="1" min="10" 
	      			ref={ (zoom)=>{this.zoom = zoom} }/>
				<button className="btn" onClick={(e)=>this.onClickZoom(e)}>Zoom</button>
			</div>
		)
	}
}

