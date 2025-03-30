import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        name: "",
        email: "",
        age: "",
        address: "",
    });

    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        sendRequest().then(() => navigate("/userdetails"));
    };

    const sendRequest = async () => {
        const res = await axios.post("http://localhost:5000/users", {
            name: String(input.name),
            email: String(input.email),
            age: Number(input.age),
            address: String(input.address),
        });
        return res.data;
    };

    return (
        <div>
            <h1>Add User</h1>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <br />
                <input type="text" name='name' onChange={handleChange} value={input.name} required />
                <br /><br />

                <label>Email</label>
                <br />
                <input type="email" name='email' onChange={handleChange} value={input.email} required />
                <br /><br />

                <label>Age</label>
                <br />
                <input type="number" name='age' onChange={handleChange} value={input.age} required />
                <br /><br />

                <label>Address</label>
                <br />
                <input type="text" name='address' onChange={handleChange} value={input.address} required />
                <br /><br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default AddUser;
