import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateUser = () => {
    const [inputs, setInputs] = useState({});
    const history = useNavigate();
    const { id } = useParams();

    useEffect(() => {
      const fetchHandler = async () => {
        try {
          const res = await axios.get(`http://localhost:5000/users/${id}`);
          if (res.data.user) {
            setInputs(res.data.user);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
      fetchHandler();
    }, [id]);

    const sendRequest = async () => {
        try {
            await axios.put(`http://localhost:5000/users/${id}`, {
                name: String(inputs.name),
                email: String(inputs.email),
                age: Number(inputs.age),
                address: String(inputs.address),
            });
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
        await sendRequest();
        history("/userdetails");
    };

    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <br />
                <input type="text" name='name' onChange={handleChange} value={inputs.name || ''} required />
                <br /><br />

                <label>Email</label>
                <br />
                <input type="email" name='email' onChange={handleChange} value={inputs.email || ''} required />
                <br /><br />

                <label>Age</label>
                <br />
                <input type="number" name='age' onChange={handleChange} value={inputs.age || ''} required />
                <br /><br />

                <label>Address</label>
                <br />
                <input type="text" name='address' onChange={handleChange} value={inputs.address || ''} required />
                <br /><br />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default UpdateUser;
