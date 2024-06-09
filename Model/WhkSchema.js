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

const RegisterWhk = mongoose.model("WhkRegister", Whkregister)
export default RegisterWhk;