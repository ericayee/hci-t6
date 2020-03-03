import React, { Component } from "react";

class DegreeListing extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="degree-listing-wrapper">
        <div className="degree-listing-name">{this.props.degree}</div>
        <div className="degree-listing-learn">learn more</div>
        <div className="degree-listing-view">View degree</div>
      </div>
    );
  }
}

export default DegreeListing;
