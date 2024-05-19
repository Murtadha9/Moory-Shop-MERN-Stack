
import Cart from '../models/cart.model.js'



import { errorHandler } from '../utiles/error.js'


//create a cart
export const createCart=async(req,res,next)=>{
   
    const newCart=new Cart(req.body)
    try {
        const savedCart=await newCart.save();
        res.status(201).json(savedCart)
    } catch (error) {
        next(error)
    }
}


//update a cart
export const updateCart=async(req,res,next)=>{
    
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedCart);
    } catch (error) {
        next(error);
    }
}



//delete a cart
export const deleteCart=async(req,res,next)=>{
   
    try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
    } catch (error) {
        next(error);
        
    }
}


//get user cart
export const getCart=async(req,res,next)=>{
    
    try {
        const cart = await Cart.findOne({userId : req.params.userId});
        res.status(200).json(cart);
    } catch (error) {
        next(error);
    }
}



//get all carts
export const getCarts=async(req,res,next)=>{
    if(!req.user.isAdmin){
        return next(errorHandler(403, 'only admin is allowed to get all carts'));
    }
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
       next(error); 
    }
}