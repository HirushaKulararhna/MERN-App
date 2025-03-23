import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddUser from './AddUser'

const URL = "http://localhost:5000/users";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const UserDetais = () => {

  const [users, setUsers] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setUsers(data.users));
  }, []);

  return (
    <div >
        <h1>User Details display Page</h1>
        <br />
        <div>
          {users && users.map((user, i ) => (
            <div key={i}>
              <AddUser user={user} />
            </div>
          
          ))}
        </div>
      
    </div>
  )
}

export default UserDetais

