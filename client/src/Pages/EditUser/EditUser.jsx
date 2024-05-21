import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditUser = () => {

   const {userId}=useParams();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password:''
      });


      useEffect(()=>{
        const fetchUser =async()=>{
            try {
                const res = await fetch(`/api/users/${userId}`);
                const data = await res.json();
                setFormData({
                    username : data.username,
                    email : data.email,
                    password :  data.password,

            });
                
            } catch (error) {
                console.log(error);
            }

        }
        fetchUser();
      },[userId])

      const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
      }

      const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const res = await fetch(`/api/users/update/${userId}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
            const data = await res.json();
          
        } catch (error) {
            console.log(error)
        }
    
      }

      const onClose=()=>{
        setFormData({
          username: '',
          email: '',
          password:''
        })
      }





  return (
    <div className="edit-user-form">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  )
}

export default EditUser
