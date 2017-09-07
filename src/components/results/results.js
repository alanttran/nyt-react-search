import React from "react";
import "./results.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const Results = props =>
  <div className="row">
    <div className="col-sm-12">
      <br/>

      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>Results</strong></h3>
        </div>
        <div className="panel-body">
          {props.results.map(result =>
            <div key={result._id} className="panel panel-default">
              <div className="panel-body display-flex align-center">

                <div className= "flex-auto truncate"><a href={result.web_url} target="_blank">{result.headline.main}</a><br/><small>{result.snippet}</small></div>

                <button type="submit" className="btn btn-success flex-none" id=""><i className="glyphicon glyphicon-floppy-disk"></i> Save</button>
              </div>
            </div>
          )}
          
        </div>
      </div>
    </div>
  </div>;

export default Results;
