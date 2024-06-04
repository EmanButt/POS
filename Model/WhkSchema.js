import mongoose from "mongoose";

const Whkregister = mongoose.Schema({
    Email:{
    required: true,
    type:String
    },

    Password:{
        type:String,
        required:true
    }
})

const RegisterWhk = mongoose.model("AdminRegister", Whkregister)
export default RegisterWhk;