import express from 'express';
import { createOrder, deleteOrder, getOrder, getOrders, orderStats, updateOrder } from '../controllers/order.controller.js';
import { verifyToken } from '../utiles/verifyUser.js';



const router=express.Router();

router.post('/create' ,verifyToken ,createOrder)
router.put('/update/:id' ,verifyToken ,updateOrder)
router.delete('/delete/:id' ,verifyToken ,deleteOrder)
router.get('/find/:userId' ,verifyToken ,getOrder)
router.get('/' ,verifyToken ,getOrders)

router.get('/income' , verifyToken  , orderStats)




export default router;