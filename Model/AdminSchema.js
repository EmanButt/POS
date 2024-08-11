import mongoose from "mongoose";

const admindatabase = mongoose.Schema({
    Email:{
    required: true,
    type:String
    },

    Password:{
        type:String,
        required:true
    }
})

const adminregisterindatabase = mongoose.model("admindatabase",admindatabase )
export default adminregisterindatabase;