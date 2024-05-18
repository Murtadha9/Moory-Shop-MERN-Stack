
import Product from '../models/product.model.js'
import { errorHandler } from '../utiles/error.js'


//create
export const createProduct=async(req,res,next)=>{
    if(!req.user.isAdmin){
        next(errorHandler(403 ,'You do not have permission to create a new Product'))
    }

    const newProduct=new Product(req.body)
    try {
        const savedProduct=await newProduct.save();
        res.status(201).json(savedProduct)
    } catch (error) {
        next(error)
    }
}


//update product
export const updateProduct=async(req,res,next)=>{
    if(!req.user.isAdmin){
        next(errorHandler(403 ,'You do not have permission to update a Product'))
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedProduct);
    } catch (error) {
        next(error);
    }
}



//delete a Product
export const deleteProduct=async(req,res,next)=>{
    if(!req.user.isAdmin){
        next(errorHandler(403 ,'You do not have permission to delete a Product'))
    }

    try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted...");
    } catch (error) {
        next(error);
        
    }
}


//get a product
export const getProduct=async(req,res,next)=>{

    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}



//get all products
export const getProducts=async(req,res,next)=>{
    const qNew = req.query.new;
    const qCategory = req.query.category;

    try {
      let products;
  
      if (qNew) {
        products = await Product.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await Product.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else {
        products = await Product.find();
      }
  
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
}