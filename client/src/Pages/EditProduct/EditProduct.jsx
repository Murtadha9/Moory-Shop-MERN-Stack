import React, { useState, useEffect } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../../firebase';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { productId } = useParams();

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
  const [imageFileURL, setImageFileURL] = useState(null);
  const [imageUploadProgress, setImageUploadProgress] = useState(null);
  const [imageUploadError, setImageUploadError] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/product/find/${productId}`);
        const data = await res.json();
        setFormData({
          title: data.title,
          desc: data.desc,
          image: data.image,
          categories: data.categories || [],
          size: data.size || [],
          color: data.color || [],
          price: data.price,
          inStock: data.inStock,
        });
        setImageFileURL(data.image); // Set the initial image URL
        setDataFetched(true);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleUploadImage = async () => {
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
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
            setFormData((prevData) => ({ ...prevData, image: downloadURL }));
            setImageFileURL(downloadURL);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(`/api/product/update/${productId}`, {
        method: 'PUT',
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
      alert('Product updated successfully');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  if (!dataFetched) {
    return <div>Loading...</div>;
  }

  return (
    <div className="AddProduct">
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="button" onClick={handleUploadImage}>
            Upload Image
          </button>
        </div>
        <div className='imgDIV'>
        {imageFileURL && <img src={imageFileURL} alt="Product" className='imgProduct'/>}
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
          id="desc"
          placeholder="Description"
          value={formData.desc}
          onChange={handleChange}
          required
        />
        <div>
          <span>Categories:</span>
          {['Men', 'Women', 'Kids', 'Shoes'].map((category) => (
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
          {loading ? 'Updating...' : 'Update Product'}
        </button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default EditProduct;
