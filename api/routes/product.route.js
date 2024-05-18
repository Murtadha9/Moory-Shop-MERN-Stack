import express from 'express';
import { verifyToken } from '../utiles/verifyUser.js';
import { createProduct ,updateProduct , deleteProduct ,getProducts, getProduct} from '../controllers/product.controller.js';



const router=express.Router();


router.post('/create' ,verifyToken ,createProduct)
router.put('/update/:id' ,verifyToken ,updateProduct)
router.delete('/delete/:id' ,verifyToken ,deleteProduct)
router.get('/find/:id' ,verifyToken ,getProduct)
router.get('/' ,verifyToken ,getProducts)


export default router;