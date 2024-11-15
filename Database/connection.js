const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async() => {
    try{
       await mongoose.connect(process.env.MONGO_URL)
       console.log("Connected to Database" )
    }
    catch(error){
       console.log(`Error in connection to Database ${error}`.bgGreen.white)
    }
}

module.exports = connectDB;