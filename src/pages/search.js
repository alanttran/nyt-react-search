import React, { Component } from "react";
import API from "../utils/API";
import Search from "../components/search/search";
import Results from "../components/results/results";

class SearchPage extends Component{
	state = {
		search: "",
		results: [],
		error: ""
	};

	handleInputChange = event => {
    	this.setState({ search: event.target.value});
  	};

	handleFormSubmit = event => {
	    event.preventDefault();
	    
	    API.getArticles(this.state.search)
	      .then(res => {
	        if (res.data.status === "error") {
	          throw new Error(res.data.message);
	        }
	        console.log(res.data.response.docs)
	        this.setState({ results: res.data.response.docs, error: "" });
	        
	      })
	      .catch(err => this.setState({ error: err.message }));
	};

	render() {
	    return (
	      <div>
		      <Search
		      	handleFormSubmit={this.handleFormSubmit}
		      	handleInputChange={this.handleInputChange}
		      />
		      <Results results={this.state.results}/>
	      </div>
	    );
  }
}

export default SearchPage;