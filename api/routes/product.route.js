import express from 'express';
import { verifyToken } from '../utiles/verifyUser.js';
import { createProduct } from '../controllers/product.controller.js';



const router=express.Router();


router.post('/' ,verifyToken ,createProduct)



export default router;