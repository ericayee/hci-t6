import React, { Component } from "react";

class DegreeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // list: this.props.data
    };
  }

  render() {
    return (
      <div>
        <p>degrees!</p>
        {this.props.data.map(d => (<p key={d.value}>{d.degree}</p>))}
      </div>
    );
  }
}

export default DegreeList;
