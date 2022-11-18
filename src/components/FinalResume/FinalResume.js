import React, { Component } from 'react'
import MyContext from '../../Context/MyContext'

export default class FinalResume extends Component {
 static contextType=MyContext;
  render() {
     const { formData } = this.context
    // const { formData } = this.props
    return (
      <div>
        <div class="full">
          <div class="left">
            <div class="Contact">
              <h3>Contact</h3>
              <p><b>Email id:</b>zuber@gmail.com</p>
              <p><b>Mobile no :</b>{formData.contact}</p>
              <p><b>Address:</b>{formData.address}</p>
              <p><b>Date of Birth:</b>{formData.dob}</p>
            </div>
            <div class="Skills">
              <h3>Skills</h3>
              <ul>
                <li><b>Programming Languages :
                  Python, Java, C++</b></li>
                <li><b>Frontend : HTML5, CSS3,
                  JavaScript, React</b></li>
                <li><b>Backend : Node.js</b></li>
              </ul>
            </div>
            <div class="Language">
              <h4>Language</h4>
              <ul>
                <li>English</li>
                <li>Hindi</li>
              </ul>
            </div>
            <div class="Hobbies">
              <h4>Hobbies</h4>
              <ul>
                <li>Playing cricket</li>
                <li>Swimming</li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="name">
              <h1>{formData.firstname + " "}{formData.lastname}</h1>
            </div>
            <div class="title">
              <p>Web Developer</p>
            </div>
            <div class="Summary">
              <h3>Summary</h3>
              <p>{formData.summary}</p>
            </div>
            <div class="Experience">
              <h4>Experience</h4>
              <h4>{formData.companyname}</h4>
              <span>{formData.startdate}</span><span>{formData.enddate}</span>
              <ul>
                <p>{formData.designation}</p>
                <li>Designing project & planing</li>
              </ul>
            </div>
            <div class="Education">
              <h4>Education</h4>
              <table>
                <tr>
                  <th>title</th>
                  <th>School Name </th>
                  <th>Grade </th>
                  <th>End Date </th>
                </tr>

                {formData.values.map((item)=>
                  (
                  <tr>
                  <td>{item.title}</td>
                  <td>{item.schoolname}</td>
						      <td>{item.grade} </td>
                  <td>{item.end}</td>
                </tr>)
  )}
              </table>
            </div>
            <div class="project">
              <ul>
                <li>
                  <h3>Project1</h3>
                  <p>This project is based on html
                    & used React</p>
                </li>
                <li>
                  <h3>Project2</h3>
                  <p>This project is based on html
                    & used React</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
