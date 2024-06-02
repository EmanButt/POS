
// mongodb+srv://Eman-Butt:YJk_Eg5mMDB-XPn@cluster0.r5n9iew.mongodb.net/Newdb`

import mongoose from "mongoose";
const connecttodatase = async() => {
    try{
        await mongoose.connect('mongodb+srv://Eman-Butt:YJk_Eg5mMDB-XPn@cluster0.r5n9iew.mongodb.net/AdminRegister' , {});
        console.log('connected to Database');
    }
    catch(error){
        console.error('error connecting to database' , error.message);
    }
};

export default connecttodatase;