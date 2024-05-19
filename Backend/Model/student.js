import mongoose from "mongoose";
const newstudent_register = mongoose.Schema({
    FirstName:{
        required: true,
        lowecase:true,
        type:String
    },
    LastName:{
        required: true,
        lowecase:true,
        type:String
    },
    Email:{
        unique:true,
        lowecase:true,
        type:String
    },
    Password:{
        required:true,
        type:String
    }
});


// Model k method na user aur newdatabase(Jo uper create ki ha) ko apas mai connect krna ha
const registeruser = mongoose.model("user",newstudent_register);
export default registeruser;


