import mongoose from "mongoose";

const adminregister = mongoose.Schema({
    Email:{
    required: true,
    type:String
    },

    Password:{
        type:String,
        required:true
    }
})

const registeradmin = mongoose.model("AdminRegister", adminregister)
export default registeradmin;