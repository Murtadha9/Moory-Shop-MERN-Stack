
import React, { useState } from 'react';
import './AddProduct.css';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
  } from 'firebase/storage';
  import { app } from '../../firebase';



const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    image: '',
    categories: [],
    size: [],
    color: [],
    price: '',
    inStock: true,
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [file, setFile] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [publishError, setPublishError] = useState(null);


  const handleUpdloadImage = async () => {
    try {
      if (!file) {
        setImageUploadError('Please select an image');
        return;
      }
      setImageUploadError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageUploadProgress(progress.toFixed(0));
        },
        (error) => {
          setImageUploadError('Image upload failed');
          setImageUploadProgress(null);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setImageUploadProgress(null);
            setImageUploadError(null);
            setFormData({ ...formData, image: downloadURL });
          });
        }
      );
    } catch (error) {
      setImageUploadError('Image upload failed');
      setImageUploadProgress(null);
      console.log(error);
    }
  };


  const handleChange = (e) => {
    const { id, value, checked } = e.target;

    if (['categories', 'size', 'color'].includes(id)) {
      const updatedArray = checked
        ? [...formData[id], value]
        : formData[id].filter((item) => item !== value);
      setFormData((prevData) => ({
        ...prevData,
        [id]: updatedArray,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };


  console.log(formData)


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch('/api/product/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      // Reset form
      setFormData({
        title: '',
        desc: '',
        img: '',
        categories: [],
        size: [],
        color: [],
        price: '',
        inStock: true,
      });
      alert('Product added successfully');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };





  return (
    <div className="AddProduct">
      <h1>Add New Product</h1>
      <form onSubmit={handleSubmit}>


        <div>
        <input type="file" accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={handleUpdloadImage}>Upload Image</button>
        </div>

        <input
          type="text"
          id="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          type="text"
          id="desc"
          placeholder="Description"
          value={formData.desc}
          onChange={handleChange}
          required
        />
        
        
        <div>
          <span>Categories:</span>
          {['Men', 'Women', 'Kids' ,'Shoes'].map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                id="categories"
                value={category}
                onChange={handleChange}
                checked={formData.categories.includes(category)}
              />
              {category}
            </label>
          ))}
        </div>

        <div>
          <span>Size:</span>
          {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((size) => (
            <label key={size}>
              <input
                type="checkbox"
                id="size"
                value={size}
                onChange={handleChange}
                checked={formData.size.includes(size)}
              />
              {size}
            </label>
          ))}
        </div>

        <div>
          <span>Color:</span>
          {['red', 'blue', 'green', 'black', 'white'].map((color) => (
            <label key={color}>
              <input
                type="checkbox"
                id="color"
                value={color}
                onChange={handleChange}
                checked={formData.color.includes(color)}
              />
              {color}
            </label>
          ))}
        </div>

        <input
          type="number"
          id="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <div>
          <label htmlFor="inStock">In Stock: </label>
          <input
            type="checkbox"
            id="inStock"
            checked={formData.inStock}
            onChange={(e) =>
              setFormData((prevData) => ({
                ...prevData,
                inStock: e.target.checked,
              }))
            }
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Product'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default AddProduct;
