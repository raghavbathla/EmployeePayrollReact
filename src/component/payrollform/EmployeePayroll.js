import React, { useState, useEffect } from 'react';
import profile1 from '../../Assets/profile-images/Ellipse -3.png';
import profile2 from '../../Assets/profile-images/Ellipse -1.png';
import profile3 from '../../Assets/profile-images/Ellipse -8.png';
import profile4 from '../../Assets/profile-images/Ellipse -7.png';
import './PayrollForm.css';
import { addUser} from "../../Service/api";
import logo from '../../Assets/images/logo.png'
import {Link} from 'react-router-dom';

const initialValue =   {
    "name": '',
    "gender": '',
    "departments": [],
    "salary": '',
    "start_date":'',
    "notes": '',
    "profile_Pic": ''
  }

const EmployeePayroll = (props) => {

    const [user, setUser] = useState(initialValue);
    const [date, setDate] = useState([]);

    const { name, gender, departments, salary, start_date, note, profile_Pic } = user;
   
    let employeeList = {
        name: '',
        profileArray: [
            { url: '../../assets/profile-images/Ellipse -3.png' },
            { url: '../../assets/profile-images/Ellipse -1.png' },
            { url: '../../assets/profile-images/Ellipse -8.png' },
            { url: '../../assets/profile-images/Ellipse -7.png' }

        ],
        allDepartment: [
            'HR', 'Sales', 'Finance', 'Engineer', 'Others'
        ],
        departMentValue: [],
        gender: '',
        salary: '',
        day: '',
        month: '',
        year: '',
        startDate: '',
        notes: '',
        id: '',
        profilePic: '',
        isUpdate: false,
        error: {
            department: '',
            name: '',
            gender: '',
            salary: '',
            profilePic: '',
            startDate: ''
        }
    }
    const [formValue, setForm] = useState(employeeList);



    // useEffect(() => {
    //     const retriveContacts = JSON.parse(localStorage.getItem('EmployeeList'));
    //     if (retriveContacts) setForm(retriveContacts);
    // }, []);

    useEffect(() => {
        localStorage.setItem('formValue', JSON.stringify(formValue));
    }, [formValue]);


    const changeValue = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
        setForm({ ...formValue, [event.target.name]: event.target.value })
        console.log(event.target.value)
    }
    const addUserDetails = async() => {
        await addUser(user);
        
    }

    const onCheckChange = (name) => {
        let index = formValue.departMentValue.indexOf(name);

        let checkArray = [...formValue.departMentValue]
        if (index > -1)
            checkArray.splice(index, 1)
        else
            checkArray.push(name);
        setForm({ ...formValue, departMentValue: checkArray });
        setUser({...user, department: checkArray})
    }

    const getChecked = (name) => {
        return formValue.departMentValue && formValue.departMentValue.includes(name);
    }

    const save = (event) => {
        event.preventDefault();
      
        let employeeObject = {
            name: formValue.name,
            departments: formValue.departMentValue,
            gender: formValue.gender,
            salary: formValue.salary,
            startDate: `${formValue.day} ${formValue.month} ${formValue.year}`,
            notes: formValue.notes,
            id: createNewEmployeeId(),
            profilePic: formValue.profilePic,
          };
        localStorage.setItem('EmployeeList',JSON.stringify(employeeObject));
       
        };

        const createNewEmployeeId = () => {
            let empID = localStorage.getItem("EmployeeID");
            empID = !empID ? 1 : (parseInt(empID)+1).toString();
            localStorage.setItem("EmployeeID", empID);
            return empID;
        }
        
    
    const reset = () => {
        setForm({ ...employeeList, id: formValue.id, isUpdate: formValue.isUpdate });

        console.log(formValue);
    }

    return (
        <div className="payroll-main">
            <header className='header-content header'>
                <div className="logo-content">
                    <img src={logo} alt="" />
                    <div>
                        <span className="emp-text">EMPLOYEE</span> <br />
                        <span className="emp-text emp-payroll">PAYROLL</span>
                    </div>
                </div>
            </header>
            <div className="form-content">
                <form className="form-head" action="#" onSubmit={save}>
                    <div className="form-head">Employee Payroll form</div>
                    <div className="row-content">
                        <label className="label text" htmlFor="name">Name</label>
                        <input className="input" type="text" id="name" name='name' value={formValue.name} onChange={(event) => changeValue(event) } placeholder="Your name.." />
                    {/* <error className="error">{formValue.error.name}</error> */}
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="profilePic">Profile image</label>
                        <div className="profile-radio-content">
                            <label >
                                <input type="radio" name='profilePic' checked={formValue.profilePic === '../../assets/profile-images/Ellipse -1.png'} value="../../assets/profile-images/Ellipse -1.png" onChange={(event) => changeValue(event)} />
                                <img className="profile" src={profile2} alt="profile" />
                            </label>
                            <label >
                                <input type="radio" name='profilePic' checked={formValue.profilePic === '../../assets/profile-images/Ellipse -3.png'} value="../../assets/profile-images/Ellipse -3.png" onChange={(event) => changeValue(event)} />
                                <img className="profile" src={profile1} alt="profile" />
                            </label>
                            <label >
                                <input type="radio" name='profilePic' checked={formValue.profilePic === '../../assets/profile-images/Ellipse -7.png'} value="../../assets/profile-images/Ellipse -7.png" onChange={(event) => changeValue(event)} />
                                <img className="profile" src={profile4} alt="profile" />
                            </label>
                            <label >
                                <input type="radio" name='profilePic' checked={formValue.profilePic === '../../assets/profile-images/Ellipse -8.png'} value="../../assets/profile-images/Ellipse -8.png" onChange={(event) => changeValue(event)} />
                                <img className="profile" src={profile3} alt="profile" />
                            </label>

                        </div>
                        {/* <error className="error">{formValue.error.profilePic}</error> */}
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="gender">Gender</label>
                        <div>
                            <input type="radio" id="male" checked={formValue.gender === 'male'} onChange={(event) => changeValue(event)} name='gender' value="male" />
                            <label className="text" htmlFor="male">Male</label>
                            <input type="radio" id="female" checked={formValue.gender === 'female'} onChange={(event) => changeValue(event)} name='gender' value="female" />
                            <label className="text" htmlFor="female">Female</label>
                        </div>
                        {/* <error className="error">{formValue.error.gender}</error> */}
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="departments">Department</label>
                        <div>
                            {formValue.allDepartment.map(item => (
                                <span key={item}>
                                    <input className="checkbox" type="checkbox" onChange={() => onCheckChange(item)} name={item}
                                        checked={getChecked(item)} value={item} />
                                    <label className="text" htmlFor={item}>{item}</label>
                                </span>
                            ))}

                        </div>
                        {/* <error className="error">{formValue.error.department}</error> */}
                    </div>

                    <div className="row-content">
                        <label className="label text" htmlFor="salary">Salary</label>
                        <input className="input" type="text" id="salary" name='salary' value={formValue.salary} onChange={(event) => changeValue(event)} />
                        {/* <error className="error">{formValue.error.salary}</error> */}
                    </div>

                    <div className="row-content">
                        <label className="label text" htmlFor="startDate">Start Date</label>
                        <div>
                            <select value={formValue.day} onChange={(event) => changeValue(event)} id="day" name="day">
                            <option value="" disabled selected>Day</option>
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select value={formValue.month} onChange={(event) => changeValue(event)} id="month" name="month">
                            <option value="" disabled selected>Month</option>
                                <option value="Jan">January</option>
                                <option value="Feb">Febuary</option>
                                <option value="Mar">March</option>
                                <option value="Apr">April</option>
                                <option value="May">May</option>
                                <option value="Jun">June</option>
                                <option value="Jul">July</option>
                                <option value="Aug">August</option>
                                <option value="Sep">September</option>
                                <option value="Oct">October</option>
                                <option value="Nov">November</option>
                                <option value="Dec">December</option>
                            </select>
                            <select value={formValue.year} onChange={(event) => changeValue(event)} id="year" name="year">
                            <option value="" disabled selected>Year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                            </select>
                        </div>
                        <error className="error">{formValue.error.startDate}</error>
                    </div>

                    <div className="row-content">
                        <label className="label text" htmlFor="notes">Notes</label>
                        <textarea onChange={(event) => changeValue(event)} id="notes" value={formValue.notes} className="input" name='notes' placeholder=""
                            style={{ height: '120%' }}></textarea>
                    {/* <error className="error">{formValue.error.notes}</error> */}
                    </div>

                    <div className="buttonParent">
                        <Link to="/" className="resetButton button cancelButton">Cancel</Link>
                        <Link to="/" className="resetButton button cancelButton">Employee List</Link>

                        <div className="submit-reset">
                        
                            <button type="submit" onClick={() => addUserDetails()}className="button submitButton" id="submitButton">{formValue.isUpdate ? 'Update' : 'Submit'}</button>
                            <button type="button" onClick={reset} className="resetButton button">Reset</button>
                        </div>
                    </div >
                </form >
            </div >
        </div >
    );
}                     
export default EmployeePayroll;