import React from 'react';
import './UserTable.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const UserTable = ({ users, onDelete,  }) => {
  return (
    <div className="products-container">
      <h1>All Users</h1>
      <table className='products-table'>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.map((user) => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>
                <Link to={`/edituser/${user._id}`}><EditIcon className='edit-icon'/></Link>
                <button onClick={() => onDelete(user._id)}><DeleteIcon className='delete-icon'/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
