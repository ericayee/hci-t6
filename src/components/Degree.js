import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Degree extends Component {
  render() {
    return (
      <div className="degree-wrapper">
        <NavLink to="/">Home</NavLink>
        <h2>Summary</h2>
      </div>
    );
  }
}

export default Degree;
