import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";
import EditUser from './component/payrollform/EditUser'
import EmployeePayroll from './component/payrollform/EmployeePayroll';
// import PayrollForm from './component/payrollform/PayrollForm';
import PayrollHome from './component/payrollform/PayrollHome';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PayrollHome/>} />
        <Route exact path="/addemployee" element={<EmployeePayroll/>} />
        <Route exact path="/edit/:id" element={<EditUser/>}/>
      </Routes>
    </div>
  );
}

export default App;
