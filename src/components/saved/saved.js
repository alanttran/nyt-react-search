import React from "react";
import "./saved.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const Saved = props =>
  <div className="row">
    <div className="col-sm-12">
      <br/>

      <div className="panel panel-success">
        <div className="panel-heading">
          <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>Saved Articles</strong></h3>
        </div>
        <div className="panel-body">
          <div className="panel panel-default">
            <div className="panel-body display-flex align-center space-between">

              <div className= "flex-none">Basic panel example</div>
              <button type="submit" className="btn btn-danger flex-none" id=""><i className="glyphicon glyphicon-trash"></i> Remove</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;

export default Saved;
