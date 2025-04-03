import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const User = (props) => {

    const {_id, name, email, age, address } = props.user
    
    const history = useNavigate();

    
    
    const deleteHandler = async () => {
      await axios.delete(`http://localhost:5000/users/${_id}`)
      .then(() => resizeBy.data)
      .then(() => history("/"))
      .then(() => history("/userdetails"))
    }
    
    
  return (
    <div>
        
      <h1>Hi {name}</h1>
      <p>ID: {_id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
      <br />
      <Link className='bg-red-400' to = {`/updateuser/${_id}`}>Update</Link>
      
      <br />
      <button onClick={deleteHandler} className='bg-red-400'>Delete</button>
      <br />

    </div>
  )
}

export default User
