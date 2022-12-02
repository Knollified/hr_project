import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [payperhour, setPayperhour] = useState('');
    const [currenthours, setCurrenthours] = useState('');
    const [pay, setPay] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const Navigate  = useNavigate();

    const saveEmployee = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/employees', {
            firstname: firstname,
            lastname: lastname,
            payperhour: payperhour,
            currenthours: currenthours,
            pay: pay,
            email: email,
            address: address
            
        });
        Navigate("/")
    }

    return (
        <div>
            <form onSubmit={ saveEmployee }>
                <div className="field">
                    <label className="label">First Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="First Name"
                        value={ firstname }
                        onChange={ (e) => setFirstname(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Last Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Last Name"
                        value={ lastname }
                        onChange={ (e) => setLastname(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Pay Per Hour</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Pay Per Hour"
                        value={ payperhour }
                        onChange={ (e) => setPayperhour(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Current Hours</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Current Hours"
                        value={ currenthours }
                        onChange={ (e) => setCurrenthours(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Pay</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Pay"
                        value={ pay }
                        onChange={ (e) => setPay(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Address</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Address"
                        value={ address }
                        onChange={ (e) => setAddress(e.target.value) }
                    />
                </div>
                
                <div className="field">
                    <button className="button is-primary">Save</button>
                </div>
            </form>
        </div>
    )
}

export default AddEmployee