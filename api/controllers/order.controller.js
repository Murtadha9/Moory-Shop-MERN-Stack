
import Order from '../models/order.model.js'



import { errorHandler } from '../utiles/error.js'


//create a order
export const createOrder=async(req,res,next)=>{
   
    const newOrder=new Order(req.body)
    try {
        const savedOrder=await newOrder.save();
        res.status(201).json(savedOrder)
    } catch (error) {
        next(error)
    }
}


//update a order
export const updateOrder=async(req,res,next)=>{
    if(!req.user.isAdmin) {
        next(errorHandler(403 ,'You do not have permission to update a order just Admin'))
    }
    
    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          res.status(200).json(updatedOrder);
    } catch (error) {
        next(error);
    }
}



//delete a order
export const deleteOrder=async(req,res,next)=>{
   
    if(!req.user.isAdmin) {
        next(errorHandler(403 ,'You do not have permission to delete a order just Admin'))
    }


    try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
    } catch (error) {
        next(error);
        
    }
}


//get user order
export const getOrder=async(req,res,next)=>{
    
    try {
        const orders = await Order.find({userId : req.params.userId});
        res.status(200).json(orders);
    } catch (error) {
        next(error);
    }
}



//get all orders
export const getOrders=async(req,res,next)=>{
    if(!req.user.isAdmin){
        return next(errorHandler(403, 'only admin is allowed to get all orders'));
    }
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
       next(error); 
    }
}


export const orderStats=async(req,res,next)=>{
    if(!req.user.isAdmin){
        return next(errorHandler(403, 'only admin is allowed to do that order stats'));
    }


    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

    try {
        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
              $project: {
                month: { $month: "$createdAt" },
                sales: "$amount",
              },
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: "$sales" },
              },
            },
          ]);
          res.status(201).json(income);
        
    } catch (error) {
        next(error);
    }

}


