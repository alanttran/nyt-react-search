import React from "react";
import "./main.css";

import Search from "../search/search";
import Saved from "../saved/saved";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const Main = props =>
  <div className="container">

    <div className="jumbotron">
      <h1 className="text-center"><strong><i className="glyphicon glyphicon-globe"></i> New York Times Search</strong></h1>
    </div>

    <Search/>
    
    <Saved/>

  </div>;

export default Main;
