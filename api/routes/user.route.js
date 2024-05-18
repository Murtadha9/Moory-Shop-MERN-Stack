import express from 'express';
import { updateUser ,deleteUser ,getUser ,getUsers, statsUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utiles/verifyUser.js';



const router=express.Router();


router.put('/update/:id' ,verifyToken , updateUser)
router.delete('/delete/:id' ,verifyToken , deleteUser)
router.get('/:id', verifyToken, getUser)
router.get('/', verifyToken, getUsers)
router.get('/stats', verifyToken, statsUser)




export default router;