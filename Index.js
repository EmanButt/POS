import express from "express";
import bodyParser from "body-parser";
const app= express();
import connectdb from "./Database/connection.js"
import router from "./Router/routing.js"
const PORT=  5005;

connectdb();
app.use(bodyParser.json());
app.use("/apis" , router);



app.listen(PORT,()=>{
    console.log(`activated server ${PORT}`);
});
