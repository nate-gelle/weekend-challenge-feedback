import React, { Component } from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Thanks from '../Thanks/Thanks';
import Admin from '../Admin/Admin';

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
            <Route exact path="/" component={Feeling} />
            <Route exact path="/2" component={Understanding} />
            <Route exact path="/3" component={Support} />
            <Route exact path="/4" component={Comment} />
            <Route exact path="/5" component={Thanks} />
            <Route exact path="/admin" component={Admin} />
          </div> 
      </Router>
      </div>
    );
  }
}

export default App;
