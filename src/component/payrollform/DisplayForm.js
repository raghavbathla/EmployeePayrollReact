import React from "react";
import "./Display.css";
import deleteIcon from "../../Assets/icons/delete-black-18dp.svg";
import editIcon from "../../Assets/icons/create-black-18dp.svg";
import profile1 from "../../Assets/profile-images/Ellipse -3.png";
import profile2 from "../../Assets/profile-images/Ellipse -1.png";
import profile3 from "../../Assets/profile-images/Ellipse -2.png";
import profile4 from "../../Assets/profile-images/Ellipse -4.png";

const Display = (props) => {
   
    let employeeList = JSON.parse(localStorage.getItem('EmployeeList'));
    console.log(employeeList);
    
    return (
      <table id="display" className="display">
        <thead>
              
          <tr key={-1}>
            <th>Profile Image</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Departments</th>
            <th>Salary</th>
            <th>Start Date</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {props.employeeList &&
            props.employeeList.map((element, id) => (
              <tr key={id}>
                <td><img className="profile" 
                src={
                  element.profilePic ===
                  "../../assets/profile-images/Ellipse -3.png"
                    ? profile1
                    : element.profilePic ===
                      "../../assets/profile-images/Ellipse -1.png"
                    ? profile2
                    : element.profilePic ===
                      "../../assets/profile-images/Ellipse -4.png"
                    ? profile3
                    : profile4
                }
                alt=""
              />
                </td>
                <td>{element.name}</td>
                <td className="gender">{element.gender}</td>
                <td>
                  {element.departments &&
                    element.departments.map((dept) => (
                      <div className="dept-label">{dept}</div>
                    ))}
                </td>
                <td> ₹ {element.salary}</td>
                <td>{element.startDate}</td>
                <td>
                  <img src={deleteIcon} alt="delete"/>
                  <img  src={editIcon} alt="edit" />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  };
  export default Display; 