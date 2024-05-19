import express from 'express';
import { createCart, deleteCart, getCart, getCarts, updateCart } from '../controllers/cart.controller.js';
import { verifyToken } from '../utiles/verifyUser.js';



const router=express.Router();

router.post('/create' ,verifyToken ,createCart)
router.put('/update/:id' ,verifyToken ,updateCart)
router.delete('/delete/:id' ,verifyToken ,deleteCart)
router.get('/find/:userId' ,verifyToken ,getCart)
router.get('/' ,verifyToken ,getCarts)





export default router;