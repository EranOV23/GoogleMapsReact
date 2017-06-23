import React from "react";

import './main.css';

import Topbar from "./Topbar"
import Main from "./Main"



export default class App extends React.Component {


  render(){
      return (
      	<div>
      		<Topbar/ >
      		<Main/ >
        </div>
      );
  }
}
