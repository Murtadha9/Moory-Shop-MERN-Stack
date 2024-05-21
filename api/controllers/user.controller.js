import bcryptjs from "bcryptjs";
import User from '../models/user.model.js'
import { errorHandler } from "../utiles/error.js";

//updateUser
export const updateUser=async(req, res, next) => {
    if (!req.user.isAdmin  )
        return next(errorHandler(401, 'You are not allowed to update becusee you are not admin'));
      try {
        if (req.body.password) {
          req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }
    
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: {
              username: req.body.username,
              email: req.body.email,
              password: req.body.password,
            },
          },
          { new: true }
        );
    
        const { password, ...rest } = updatedUser._doc;
    
        res.status(200).json(rest);
      } catch (error) {
        next(error);
      }
};


//delete
export const deleteUser=async(req, res, next) => {
    if (req.user.id !== req.params.id && !req.user.isAdmin )
        return next(errorHandler(401, 'You can only delete your own account!'));
      try {
        await User.findByIdAndDelete(req.params.id);
        res.clearCookie('access_token');
        res.status(200).json('User has been deleted!');
      } catch (error) {
        next(error);
      }
};


//getUser
export const getUser = async (req, res, next) => {
    if(!req.user.isAdmin){
        return next(errorHandler(401, 'You are not Admin!'));
    }
    try {
      const user = await User.findById(req.params.id);
    
      if (!user) return next(errorHandler(404, 'User not found!'));
    
      const { password: pass, ...rest } = user._doc;
    
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };


//getUsers
  export const getUsers = async (req, res, next) => {
    const query=req.query.new;

    if(!req.user.isAdmin){
        return next(errorHandler(401, 'You are not Admin!'));
    }
    try {
      const users = query? await User.find().sort({_id:-1}).limit(5) : await User.find();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };


//get user STATS

export const statsUser = async (req, res, next) => {
    try {
        if (!req.user.isAdmin) {
            return next(errorHandler(401, 'You are not Admin!'));
        }

        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

        // Logging the date range for debugging
        console.log('Date Range:', lastYear, 'to', new Date());

        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            { $project: { month: { $month: "$createdAt" } } },
            { $group: { _id: "$month", total: { $sum: 1 } } },
        ]);

        // Logging the aggregation result for debugging
        console.log('Aggregation Result:', data);

        res.status(201).json(data);
    } catch (error) {
        console.error("Error during aggregation:", error); // Log the error for debugging
        next(error);
    }
}


//signout
export const signout = (req, res, next) => {
  try {
    res
      .clearCookie('access_token')
      .status(200)
      .json('User has been signed out');
  } catch (error) {
    next(error);
  }
};