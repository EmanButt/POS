import mongoose from "mongoose";

const OrderBookerRegister = mongoose.Schema({

    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required :true
    }

    })
    const RegisterOrderBooker = mongoose.model("OrderBookerREgister" , OrderBookerRegister);
    export default RegisterOrderBooker;