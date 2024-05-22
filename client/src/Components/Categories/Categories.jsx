
import React, { useEffect, useState } from 'react';
import './Categories.css';
import CategoryItem from '../CategoryItem/CategoryItem';
import menImage from '../../assets/images/men.jpg';
import womenImage from '../../assets/images/women.jpg';
import kidsImage from '../../assets/images/kids.jpg';
import shoesImage from '../../assets/images/shoes.jpg';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('/api/product/');
        const data = await response.json();
        const uniqueCategories = Array.from(new Set(data.flatMap(product => product.categories)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    getProducts();
  }, []);

  const categoryImages = {
    Men: menImage,
    Women: womenImage,
    Kids: kidsImage,
    Shoes: shoesImage
  };

  return (
    <div className='CategoriesContainer'>
      {categories.map((category, index) => (
        <CategoryItem
          item={{
            title: category,
            image: categoryImages[category] || '../../assets/images/default.jpg' 
          }}
          key={index}
        />
      ))}
    </div>
  );
};

export default Categories;

