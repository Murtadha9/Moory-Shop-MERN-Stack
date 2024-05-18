import bcryptjs from "bcryptjs";
import User from '../models/user.model.js'
import { errorHandler } from "../utiles/error.js";
import jwt from 'jsonwebtoken';

//sign up
export const signup=async(req,res,next)=>{
    const {username,email,password }=req.body;

    if(!username || !email || !password || username==="" || email==="" || password===""){
        return next(errorHandler(400,'all fileds are required'));
    }

    const hashPassword= bcryptjs.hashSync(password,10)

    const newUser= new User({username,email,password:hashPassword })

    try {
        await newUser.save();
        res.status(201).json({message:'user created'  })
    } catch (error) {
        next(error);
    }


}


//sign in
export const signin=async(req,res,next)=>{
    const {email ,password}=req.body;
    
    if(!email || !password || email==="" || password===""){
        return next(errorHandler(400,'all fileds are required'));
    }

    try {
        const validUser= await User.findOne({email})

        if(!validUser){
            return next(errorHandler(404,'User not found'));
        }
        const isPassword=bcryptjs.compareSync(password,validUser.password)
        if(!isPassword){
            return next(errorHandler(400,'invalid  password'));
        }

        const token =jwt.sign(
            {id:validUser._id , isAdmin:validUser.isAdmin},
            process.env.JWT_SECRET,
        )
        const {password:pass ,...others}=validUser._doc
        res.status(200).cookie('access_token',token ,{httpOnly:true}).json(others)
    } catch (error) {
        next(error);
    }
}

//google
export const google=async(req,res,next)=>{
    
}



