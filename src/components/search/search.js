import React from "react";
import "./search.css";



// Using the datalist element we can create autofill suggestions based on the props.breeds array
const Search = props =>
  <div>
    <div className="row">
      <div className="col-sm-12">
        <br/>

        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title"><strong><i className="fa fa-list-alt"></i>Search Parameters</strong></h3>
          </div>
          <div className="panel-body">
            <form >
              <div className="form-group">
                <label htmlFor="search">Search Term:</label>
                <input 
                type="text" 
                className="form-control"
                value={props.search}
                onChange={props.handleInputChange}/>
              </div>

              <div className="form-group">
                <label htmlFor="start-year">Start Year (Optional):</label>
                <input type="text" className="form-control" id="start-year"/>
              </div>

              <div className="form-group">
                <label htmlFor="end-year">End Year (Optional):</label>
                <input type="text" className="form-control" id="end-year"/>
              </div>

              <button type="submit" className="btn btn-primary" onClick={props.handleFormSubmit}><i className="fa fa-search"></i> Search</button>

            </form>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  ;

export default Search;
