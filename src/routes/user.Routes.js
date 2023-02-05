import {Router} from 'express';
import {getUser, createUser, updateUser, deleteUser, getUserById} from '../controllers/user.Controller.js';

const router =  Router();


router.get('/user',getUser);
router.post('/user',createUser);
router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);
router.get('/user/:id',getUserById);

export default router;