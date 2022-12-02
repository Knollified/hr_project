import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



const EmployeeList = () => {
    const [employees , setEmployee] = useState([]);
    
    

    const getEmployees = async () => {
        const response = await axios.get('http://localhost:5000/employees');
        setEmployee(response.data);
    }

    const deleteEmployee = async (id) => {
        await axios.delete(`http://localhost:5000/employees/${id}`);
        getEmployees();
    }

    useEffect(()=> {
        getEmployees();
    },[]);

    return (
        <div>
            <h1 className="title is-1">Human Resource App</h1>
            <br />
            <Link to="/add" className="button is-primary mt2">Add New</Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Pay Per Hour</th>
                        <th>Current Hours</th>
                        <th>Total Pay</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp, index) => (
                        <tr key={emp.id}>
                            <td>{index + 1}</td>
                            <td>{emp.id}</td>
                            <td>{emp.firstname}</td>
                            <td>{emp.lastname}</td>
                            <td>{emp.payperhour}</td>
                            <td>{emp.currenthours}</td>
                            <td>{emp.pay}</td>
                            <td>{emp.email}</td>
                            <td>{emp.address}</td>
                            <td>
                                <Link to={`/edit/${emp.id}`} className="button is-small is-info is-1 is-half">Edit</Link>
                                <button onClick={ () => deleteEmployee(emp.id) } className="button is-small is-danger is-2 is-half">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList
