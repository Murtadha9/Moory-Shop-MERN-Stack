import React, { useEffect, useState } from 'react';
import './Orders.css'; // Add styling as needed
import DeleteIcon from '@mui/icons-material/Delete';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch('/api/order');
        const data = await res.json();
  
        // Check if data is an array before updating state
        if (Array.isArray(data)) {
          setOrders(data);
          setLoading(false);
        } else {
          setError("Invalid data received from the server.");
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
  
    fetchOrders();
  }, []);


  const handleDelete = async (ordertId) => {
    try {
      const res = await fetch(`/api/order/delete/${ordertId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        return setError(data.message);
      }
      if (res.ok) {
        setOrders((prev) => {
          return prev.filter((o) => o._id !== ordertId);
        });
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="products-container">
      <h1>All Orders</h1>
      <table className="products-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Products</th>
            <th>Amount</th>
            <th>Address</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order.userId}</td>
              <td>
                {order.products.map(product => (
                  <div key={product.productId}>
                    {product.productId} (Qty: {product.quantity})
                  </div>
                ))}
              </td>
              <td>${order.amount}</td>
              <td>{order.address.street}, {order.address.city}, {order.address.zip}, {order.address.country}</td>
              <td>{order.status}</td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td>
                <button onClick={()=>handleDelete(order._id)}><DeleteIcon className='delete-icon'/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;

