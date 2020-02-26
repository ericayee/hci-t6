import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <div className="landing-wrapper">
       <h1>Finding Your Way</h1>
       <div>
          <NavLink to="/">Home</NavLink>
          <br/>
          <NavLink to="/degree">View current degree progress</NavLink>
          <br/>
          <NavLink to="/explore">Explore degree options</NavLink>
       </div>
     </div>
    );
  }
}

export default Landing;
