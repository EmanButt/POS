import express from "express";
import bodyParser from "body-parser";
const app= express();
const cors = require('cors');
import connectdb from "./Database/connection.js"
import router from "./Router/routing.js"
import cors from 'cors'
const PORT=  5005;

connectdb();
app.use(cors())
app.use(bodyParser.json());
app.use("/apis" , router);



app.listen(PORT,()=>{
    console.log(`activated server ${PORT}`);
});
