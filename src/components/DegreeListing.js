import React, { Component } from "react";
import { Link } from "react-router-dom";
import arrowUp from '../media/arrow-up.svg';
import arrowDown from '../media/arrow-down.svg';
import arrowUpRight from '../media/arrow-up-right.svg';

class DegreeListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      learnMore: false
    };
  }

  render() {
    return (
      <div className="degree-listing-wrapper">
        <div className="degree-listing-flex">
          <div className="degree-listing-name">{this.props.degree}</div>
          <div
            className="degree-listing-learn"
            onClick={() => this.setState({
              learnMore: !this.state.learnMore
            })}>
              <span className="underline-text">learn more</span>&nbsp;
              <span><img src={this.state.learnMore ? arrowUp : arrowDown} className="arrow-icon" alt="arrow" /></span>
            </div>
          <div className="degree-listing-link">
            <a href={this.props.link} target="_blank" rel="noopener noreferrer">Catalog page&nbsp;
            <span><img src={arrowUpRight} className="arrow-icon" alt="upper right arrow" /></span></a>
          </div>
          <Link to={{
            pathname: '/hci-t6/degree',
            degreeName: this.props.degree
          }}>
            <div className="degree-listing-view">View degree</div>
          </Link>
        </div>
        {this.state.learnMore &&
          <div className="degree-listing-desc">{this.props.description}</div>}
      </div>
    );
  }
}

export default DegreeListing;
