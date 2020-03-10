import React, { Component } from "react";
//import { NavLink } from 'react-router-dom';
import './Degree.css';
import ReactTooltip from 'react-tooltip';
import info from '../media/info-icon.svg';
import arrowUp from '../media/arrow-up.svg';
import arrowDown from '../media/arrow-down.svg';
import DegreeSidebar from "./DegreeSidebar";


const CompletedRequirementsTooltipText = "Each degree is broken down into a series of requirements, including both major requirements and university-wide requirements";
const MajorGPATooltipText = "Degree GPA only includes courses that fulfill the requirements of a student's major";
const UniversityDegreeTooltipText = "University GPA includes only courses taken at Northeastern";
const SemesterHoursTooltipText = "Only courses taken at Northeastern count towards Semester Hours";


class Degree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedGPA : false,
      degreeName : this.props.location.degreeName
    };
  }

  render() {
    console.log(this.props.location.degreeName);
    return (
      <div className="degree-wrapper">
      <DegreeSidebar/>
      <div className="summary">
      <div className="header1">
      <a id="summary"/>
      <h2>Summary</h2>
      </div>
      <div className="sumText">

      <p> <b>Degree:</b> {
        this.props.location.degreeName ? this.props.location.degreeName : 'B.S. Computer Science/Media Art'
      }</p>
      {/*<p> <b>Degree:</b> Computer Science/Media Art</p>*/}
      <p> <b>Credits:</b> 30/100 Required</p>
      <p> <b> University Credits: </b> 22/100 Required</p>
      <p> <b> Completed Requirements:</b> 2/8
          <span><img data-tip={CompletedRequirementsTooltipText} src={info} className="info-icon" alt="info icon" /></span>
          <ReactTooltip place="top" type="dark" effect="solid" multiline={true}/>
      </p>

      <p> <b> Semester Hours: </b> 30/64 Required
          <span><img data-tip={SemesterHoursTooltipText} src={info} className="info-icon" alt="info icon" /></span>
          <ReactTooltip place="top" type="dark" effect="solid"/>
      </p>

      <button type="button" className="MultipleGPA" onClick={() => this.setState({
        expandedGPA: !this.state.expandedGPA
      })}>
        <p> <b> Total GPA: </b> 3.11
        <span><img src={this.state.expandedGPA ? arrowUp : arrowDown} className="dropDownGPA" alt="dropDownGPA" /></span>
        </p>

      </button>
      {this.state.expandedGPA &&
        <div className="expandedGPASection">
        <p> A minimum total GPA of 2.0 is required to graduate. </p>
        <p> A minimum degree GPA of 2.3 if required to graduate. </p>


          <p> <b> Degree GPA:</b> 3.0
            <span><img data-tip={MajorGPATooltipText} src={info} className="info-icon" alt="info icon" /></span>
            <ReactTooltip place="top" type="dark" effect="solid"/>
          </p>
          <p> <b> University GPA: </b> 3.1
            <span><img data-tip={UniversityDegreeTooltipText} src={info} className="info-icon" alt="info icon" /></span>
            <ReactTooltip place="top" type="dark" effect="solid"/>
          </p>
        </div>}
</div>



      </div>

      <div className="Computer Science">
      <div className="header1">
      <a id="main-requirements"/>
      <h2>Computer Science </h2>
      </div>
      <p> 1/3 of Computer Science Requirements Satisfied </p>

      <div className="ReqFormat">
      <h4> Overview Requirements </h4>
      <div className = "requirementTable" >
      <table>
      <tr>
        <th>Course Number</th>
        <th>Title</th>
        <th>Status</th>
        <th>Grade</th>
        <th>Credits</th>

      </tr>
      <tr>
        <td>cs1200</td>
        <td>Leadership Skills</td>
        <td>Completed</td>
        <td>P</td>
        <td>1</td>
      </tr>

      <tr>
        <td>cs1210</td>
        <td> Professional Development for Khoury Co-op	</td>
        <td>Completed</td>
        <td>P</td>
        <td>1</td>
      </tr>
      </table>
</div>

<h4> Fundemental Courses </h4>
<p> A grade of C- or higher is required in all compute science fundemental courses" </p>

<div className = "requirementTable" >

      <table>
      <th>Course Number</th>
      <th>Title</th>
      <th>Status</th>
      <th>Grade</th>
      <th>Credits</th>


      <tr>
        <td>CS 1800</td>
        <td>Discrete Structures </td>
        <td> Completed </td>
        <td>B</td>
        <td>5</td>
      </tr>

      <tr>
        <td>CS 2500</td>
        <td>Fundamentals of Computer Science 1 </td>
        <td> Completed </td>
        <td>B-</td>
        <td>5</td>
      </tr>

      <tr>
        <td>CS 2510</td>
        <td>Fundamentals of Computer Science 2 </td>
        <td> In Progress </td>
        <td> </td>
        <td>5</td>
      </tr>


    </table>
      </div>

      <h4> Presentation Requirement </h4>
      <div className = "requirementTable" >
      <table>
      <tr>
        <th>Course Number</th>
        <th>Title</th>
        <th>Status</th>
        <th>Grade</th>
        <th>Credits</th>

      </tr>
      <tr>
        <td>THTR 1170</td>
        <td>The Eloquent Presenter</td>
        <td> </td>
        <td> </td>
        <td>1</td>
      </tr>
      </table>
      </div>
      </div>
</div>
      <div className="Media Art">
      <div className="header1">
      <a id="art-requirements"/>
      <h2> Art </h2>
      </div>

      <p> 0/2 of  Media Art Requirements Satisfied </p>

      <div className="ReqFormat">
      <h4> Required Media Art Courses </h4>
      <div className = "requirementTable" >
      <table>
      <tr>
        <th>Course Number</th>
        <th>Title</th>
        <th>Status</th>
        <th>Grade</th>
        <th>Credits</th>

      </tr>
      <tr>
        <td>ARTF 1120</td>
        <td>Observational Drawing	</td>
        <td>Completed</td>
        <td>B</td>
        <td>4</td>
      </tr>

      <tr>
        <td> ARTF 1141 - ARTF 1149</td>
        <td>Complete one course in the range		</td>
        <td></td>
        <td></td>
        <td>4</td>
      </tr>

      <tr>
        <td>ARTF 1122</td>
        <td> 2D Fundamentals: Surface and Drawing (with optional ARTF 1123)		</td>
        <td>Completed</td>
        <td>A</td>
        <td>4</td>
      </tr>

      <tr>
        <td>ARTF 1124</td>
        <td> 3D Fundamentals: Structure and Drawing		</td>
        <td>Completed</td>
        <td>C+</td>
        <td>4</td>
      </tr>
      <tr>
        <td>ARTF 1125	</td>
        <td> 3D Tools		</td>
        <td>Completed</td>
        <td>C+</td>
        <td>1</td>
      </tr>
      </table>
</div>

<h4> Media Arts Electives </h4>

<div className = "requirementTable" >

      <table>
      <th>Course Number</th>
      <th>Title</th>
      <th>Status</th>
      <th>Grade</th>
      <th>Credits</th>


      <tr>
        <td>ARTD 2360</td>
        <td>Photo Basics	 </td>
        <td> Completed </td>
        <td>B</td>
        <td>4</td>
      </tr>

      <tr>
        <td>ARTD 2370</td>
        <td>Animation Basics	 </td>
        <td> In progress </td>
        <td> </td>
        <td> 4 </td>
      </tr>

      <tr>
        <td>ARTD 2380</td>
        <td> Video Basics	 </td>
        <td> In progress </td>
        <td> </td>
        <td>4</td>
      </tr>


    </table>
      </div>


      </div>
</div>



      <div className="NUpath">
      <div className="header1">
      <a id="general-requirements"/>
      <h2> NUPath </h2>
      </div>

      <p> Multiple courses may fulfill NUpath requirements</p>

      <div className="ReqFormat">
      <h4> Engaging with the Natural and Designed World </h4>
      <h4> Exploring Creative Expression and Innovation </h4>
      <div className = "requirementTable" >

            <table>
            <th>Course Number</th>
            <th>Title</th>
            <th>Status</th>
            <th>Grade</th>
            <th>Credits</th>


            <tr>
              <td>ARTF 1120	</td>
              <td>Observational Drawing		 </td>
              <td> Completed </td>
              <td>B</td>
              <td>4</td>
            </tr>


          </table>
            </div>
      <h4> Conducting Formal and Quantitative Reasoning </h4>
      <h4> Analyzing and Using Data </h4>

      <h4> Writing Intensives </h4>
      <div className = "requirementTable" >

            <table>
            <th>Course Number</th>
            <th>Title</th>
            <th>Status</th>
            <th>Grade</th>
            <th>Credits</th>

            <tr>
              <td>ENG 1100</td>
              <td>Writing in the First Year	 </td>
              <td> Completed </td>
              <td>A</td>
              <td>4</td>
            </tr>

            <tr>
              <td>ENG 3010, ENG 3001</td>
              <td> Choose between: Interdisplinary Advanced Writing, Advanced Writing for Technical Fields</td>
              <td> </td>
              <td> </td>
              <td>4</td>
            </tr>

          </table>
            </div>

            <h4> Integrating Knowledge and Skills Through Experience </h4>
<p> This requirement may be fulfilled through Co-op, Study Abroad, or Research </p>

      </div>
      </div>

      <div className="Transfer">
      <a id="transfer"/>
      <div className="header1">
      <h2> Transfer Credits </h2>
      </div>

      <div className = "requirementTable" >
      <p> Only AP credits above 3 are accepted for credit </p>

            <table>
            <th>Title</th>
            <th>Status</th>
            <th>Grade</th>
            <th>Credits</th>

            <tr>
              <td>AP Writing</td>
              <td> Accepted </td>
              <td> Completed </td>
              <td>4</td>
            </tr>

            <tr>
              <td> AP Biology</td>
              <td> Accepted </td>
              <td> 5 </td>
              <td> 4 </td>
            </tr>

            <tr>
              <td> AP French</td>
              <td> Not Accepted  </td>
              <td> 3 </td>
              <td> - </td>
            </tr>

          </table>
            </div>


      </div>

      </div>


    );
  }
}

export default Degree;
