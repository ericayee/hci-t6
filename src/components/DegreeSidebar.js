import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const yearOptions = [
  { value: "2017", label: "2017" },
  { value: "2018", label: "2018" },
  { value: "2019", label: "2019" },
  { value: "2020", label: "2020" }
];

class DegreeSidebar extends Component {
  constructor(props) {
    super(props);
  }

  handleDropdown = () => {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
      dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  };

  render() {
    return (
      <div class="sidenav">
		<Link to='/'>
		<button class="home-btn">Home</button>
		</Link>
        <a href="#summary">Summary</a>
        <a href="#main-requirements">Computer Science</a>
        <a href="#art-requirements">Art</a>
        <a href="#general-requirements">NuPath</a>
        <a href="#transfer">Transfer Credit</a>
        <button class="dropdown-btn">
          Dropdown
          <i class="fa-caret-down"></i>
        </button>
        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        {/*<Dropdown
          class="dropdown-btn"
          text="dropdown"
          onClick={this.handleDropdown}
        >
          <Dropdown.Menu>
            <Dropdown.Item text="List Item" />
          </Dropdown.Menu>
        </Dropdown>
        <button class="dropdown-btn">
          Dropdown
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-container">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
	</div> */}
      </div>
    );
  }
}

export default DegreeSidebar;
