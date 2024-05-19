import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import productRouter from './routes/product.route.js'
import cartRouter from './routes/cart.route.js'
import orderRouter from './routes/order.route.js'



const app = express();
app.use(express.json())
app.use(cookieParser())
dotenv.config();





mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log(err)
})
app.listen(3000,()=>{
    console.log('server is running on port 3000')
})


//Edndpoint
app.use('/api/users' , userRouter)
app.use('/api/auth' , authRouter)
app.use('/api/product' , productRouter)
app.use('/api/cart' , cartRouter)
app.use('/api/order' , orderRouter)

//MiddleWare
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });




