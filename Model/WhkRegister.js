import mongoose from "mongoose";

const warehouseregister = mongoose.Schema({

    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required :true
    }

    })
    const registerwhk = mongoose.model("warehouse" , warehouseregister);
    export default registerwhk;