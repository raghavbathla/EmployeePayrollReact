import React, { Component } from 'react';
import './PayrollHome.css';
import logo from './logo.png';
import addImage from './add-24px.svg';
import { Link } from "react-router-dom";
// import searchIcon from "../../Assets/icons/search-black-18dp.svg";
import Display from './DisplayForm';

export class PayrollHome extends Component {
    render() {
        return (
            <div>
                <body>
                    <header class="header-content header">
                        <div class="logo-content">
                            <img src={logo} alt="logo" />
                            <div>
                                <span class="emp-text">EMPLOYEE</span><br/>
                                <span class="emp-text emp-payroll">PAYROLL</span>
                            </div>
                        </div>
                    </header>
                            <div class="main-content">
                                <div class="header-content sub-main-content">
                                    <div class="emp-details-text">
                                        Employee Details
                                    <div class="emp-count"></div>
                                    </div>
                            {/* <div className="search-box" onClick={this.openSearch}>
                                <input
                                className={"input1 " + (this.state.searchExpand && "input1-expand")}
                                onChange={this.search}
                                type="text"
                                placeholder=""
                                />
                                <img className="search-icon" src={searchIcon} alt="" />
                                </div> */}
                            <Link className="add-btn" to="/addemployee">
                               
                                    <img src={addImage} alt="Add user" />
                               
                                <div>Add User</div></Link>
                            
                        </div>
                        <div class="table-main">
                        <Display />  
                        </div>
                    </div>
                </body>
                
            </div>
        )
    }
}

export default PayrollHome
