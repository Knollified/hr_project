import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
 
function App() {
  return (
    <Router>
    <div className="container">
      <div className="columns ">
        <div className="column">
          <Routes>
            <Route exact path="/" element={<EmployeeList />} />
            <Route path="/add" element={<AddEmployee />} />
            <Route path="/edit/:id" element={<EditEmployee />} />
          </Routes>
        </div>
      </div>
    </div>
    </Router>
  );
}
 
export default App