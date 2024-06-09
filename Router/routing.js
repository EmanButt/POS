import express from "express";
const  router = express.Router();
import {register , login} from '../Controller/RegisterAdmin.js';
import {register , login} from '../Controller/RegisterWhk.js';
import {register , login} from '../Controller/RegisterOrderbooker.js';



router.post('/register', register);
router.get('/login',login)



export default router;