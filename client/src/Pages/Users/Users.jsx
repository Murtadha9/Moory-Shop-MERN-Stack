import React, { useEffect, useState } from 'react'
import UserTable from '../../Components/UsersTable/UsersTable';

const Users = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    }
    getUsers();

  } ,[])

  console.log(users)


  const handleDelete =()=>{}

  return (
    <div>
      <UserTable users={users} onDelete={handleDelete } />
    </div>
  )
}

export default Users
