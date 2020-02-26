import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Explore extends Component {
  render() {
    return (
      <div className="explore-wrapper">
        <NavLink to="/">Home</NavLink>
        <h2>Explore other degree options</h2>
      </div>
    );
  }
}

export default Explore;
