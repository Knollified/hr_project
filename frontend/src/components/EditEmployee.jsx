import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [payperhour, setPayperhour] = useState('');
    const [currenthours, setCurrenthours] = useState('');
    const [pay, setPay] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const { id } = useParams();
    const Navigate  = useNavigate();

    const updateEmployee = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/employees/${id}`,{
            firstname: firstname,
            lastname: lastname,
            payperhour: payperhour,
            currenthours: currenthours,
            pay: pay,
            email: email,
            address: address
        });
        Navigate("/");
    }
    
    const getEmployeeById = async () => {
        const response = await axios.get(`http://localhost:5000/employees/${id}`);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setPayperhour(response.data.payperhour);
        setCurrenthours(response.data.currenthours);
        setPay(response.data.pay);
        setEmail(response.data.email);
        setAddress(response.data.address);
    }

    useEffect(() => {
        getEmployeeById();
    }, []);
    

    return (
        <div>
            <form onSubmit={ updateEmployee }>
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
                    <button className="button is-primary">Update</button>
                    
                </div>
            </form>
        </div>
    )
}


export default EditEmployee