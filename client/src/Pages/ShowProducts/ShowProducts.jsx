import React, { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';


const ShowProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/product');
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      const res = await fetch(`/api/product/delete/${productId}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (data.success === false) {
        return setError(data.message);
      }
      if (res.ok) {
        setProducts((prev) => {
          return prev.filter((p) => p._id !== productId);
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
      <h1>All Products</h1>
      <table className="products-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
            <th>Categories</th>
            <th>Sizes</th>
            <th>Colors</th>
            <th>Price</th>
            <th>In Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.desc}</td>
              <td>
                <img src={product.image} alt={product.title} width="50" />
              </td>
              <td>{product.categories.join(', ')}</td>
              <td>{product.size.join(', ')}</td>
              <td>{product.color.join(', ')}</td>
              <td>${product.price}</td>
              <td>{product.inStock ? 'Yes' : 'No'}</td>
              <td>
                <Link to={`/editproduct/${product._id}`}><EditIcon/></Link>
                <button onClick={() => handleDelete(product._id)}><DeleteIcon/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowProducts;