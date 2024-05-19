import express from "express";
const  router = express.Router();
import {register,login,deletestdnt,deleteonestdnt,updatestudent1} from '../Controller/studentregister.js';


router.post('/register', register);
router.get('/login',login)
router.delete('/deletestdnt',deletestdnt);
router.delete('/Deletestdnt1',deleteonestdnt);
router.put('/updatestudent1/:id',updatestudent1);


export default router;
