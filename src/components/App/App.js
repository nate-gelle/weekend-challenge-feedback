import React, { Component } from 'react';
import axios from 'axios';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <div>
            <Route exact path="/" component={ColorPage} />
            <Route exact path="/2" component={Counter} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/counter" component={Counter} />
          </div> 
      </Router>
      </div>
    );
  }
}

export default App;
