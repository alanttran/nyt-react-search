import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchPage from "./pages/search";
import Main from "./components/main";
import Saved from "./components/saved";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/search" component={SearchPage} />
            <Route exact path="/saved" component={Saved} />
        </div>
      </Router> 
    );
  }
}

export default App;
