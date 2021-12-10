import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";

import EmployeePayroll from './component/payrollform/EmployeePayroll';
// import PayrollForm from './component/payrollform/PayrollForm';
import PayrollHome from './component/payrollform/PayrollHome';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<PayrollHome />} />
        <Route path="/addemployee" element={<EmployeePayroll/>} />
      </Routes>
    </div>
  );
}

export default App;
