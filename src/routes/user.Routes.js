import {Router} from 'express';
import {getUser, createUser, updateUser, deleteUser, getUserById, getUserByUserName, getUserByEmail} from '../controllers/user.Controller.js';

const router =  Router();

router.get('/user',getUser);
router.post('/user',createUser);
router.put('/user/:id',updateUser);
router.delete('/user/:id',deleteUser);
router.get('/user/:id',getUserById);
router.get('/userByUsername/:username',getUserByUserName);
router.get('/userByEmail/:email',getUserByEmail);

export default router;