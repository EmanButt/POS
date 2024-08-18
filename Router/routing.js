import express from "express";
const  router = express.Router();
import { registeradmin, loginadmin} from '../Controller/RegisterAdmin.js';
// import {register , login} from '../Controller/RegisterWhk.js';
import {registerOrderbooker, loginOrderbooker } from '../Controller/RegisterOrderbooker.js';
import AddShop from '../Controller/Add Shop.js';


//admin Routes
router.post('/admin/register', registeradmin);
router.get('/admin/login',loginadmin);

//orderbooker Routes
router.post('/orderbooker/register', registerOrderbooker);
router.get('/orderbooker/login',loginOrderbooker);
router.post('/orderbooker/AddShop', AddShop)


export default router;