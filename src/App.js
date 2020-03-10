import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Landing from './components/Landing';
import Degree from "./components/Degree";
import Explore from "./components/Explore";
import Error from './components/Error';

class App extends Component {
  render() {
    return (
       <Router>
        <div className="App">
          <Switch>
           <Route path="/hci-t6/home" component={Landing} exact/>
           <Route path="/hci-t6/degree" component={Degree}/>
           <Route path="/hci-t6/explore" component={Explore}/>
           <Route component={Error}/>
         </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
