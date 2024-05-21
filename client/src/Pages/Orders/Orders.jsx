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
        setOrders(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="orders-container">
      <h1>All Orders</h1>
      <table className="orders-table">
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
                <button><DeleteIcon/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;

