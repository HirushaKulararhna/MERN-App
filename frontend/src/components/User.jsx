import React from 'react'

const User = (props) => {

    const {_id, name, email, age, address } = props.user
    
  return (
    <div>
        
      <h1>Hi {name}</h1>
      <p>ID: {_id}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
      <br />
      <button className='bg-red-400'>Update</button>
      <br />
      <button className='bg-red-400'>Delete</button>
      <br />

    </div>
  )
}

export default User
