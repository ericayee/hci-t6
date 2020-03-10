import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="landing-wrapper">
        <h1>Finding Your Way</h1>
        <div>
          <Link to="/degree">
            <button class="home-btn">View current degree progress</button>
          </Link>
          <Link to="/explore">
            <button class="home-btn">Explore degree options</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Landing;
