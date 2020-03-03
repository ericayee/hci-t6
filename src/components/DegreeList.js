import React, { Component } from "react";
import DegreeListing from './DegreeListing';

class DegreeList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {this.props.data.map(d => (
          <DegreeListing
            key={d.value+1}
            value={d.value}
            program={d.program}
            degree={d.degree}
            description={d.description}
           />))}
      </div>
    );
  }
}

export default DegreeList;
