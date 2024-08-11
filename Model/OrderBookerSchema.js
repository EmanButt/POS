import mongoose from "mongoose";

const OrderBookerRegister = mongoose.Schema({
    Name:{
        type:String,
        required:true
    },

    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required :true
    }

    })
    const RegisterOrderBookerinDatabase = mongoose.model("OrderBookerREgister" , OrderBookerRegister);
    export default RegisterOrderBookerinDatabase;