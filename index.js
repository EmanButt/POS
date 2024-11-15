const express = require('express')
const app = express()          // Rest Objects
const cors  = require('cors')
const morgan  = require('morgan')
const colors  = require('colors')
const dotenv  = require('dotenv')
const connectDB = require('./Database/connection')
 const PORT = process.env.PORT    || 8080

// Dotenv configure
dotenv.config()


// MOngodb connection call
connectDB();

//Middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.get('',(req,res) =>{
    res.status(200).json({
        success:true,
        message:"Welcome to full stack app"
    })
});


app.listen(PORT,()=>{
    console.log(`Server Running ${PORT}`.bgMagenta.black);
});
