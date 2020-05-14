import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from './dashboard/dashboard.js';


class App extends Component {

  render() {
    return (
      <Router>
      <div>         
          <Route exact path="/" component={Dashboard} /> 
      </div>
  </Router>
    );

  }
}

export default App;