import React, { Component } from "react";

class DegreeSidebar extends Component {
  constructor() {}

  handleDropdown = () => {

  }

  render() {
    return (
      <div class="sidenav">
        <button>Home</button>
        <button>Print</button>
        <a href="#summary">Summary</a>
        <a href="#main-requirements">Computer Science</a>
        <a href="#art-requirements">Art</a>
        <a href="#general-requirements">NuPath</a>
        <a href="#transfer">Transfer Credit</a>
      </div>
    );
  }
}

export default DegreeSidebar;
