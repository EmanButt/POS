import mongoose from "mongoose";

const AddShop = mongoose.Schema({
    Shop_Name:{
        type:String,
        required:true
    },
    Owner_Name:{
        type:String,
        required:true
    },
    Locality:{
        type:String,
        required :true
    },
    Sub_Location:{
        type:String,
        required:true
    },
    Contact_No:{
        type:String,
        required :true
    },
    CNIC:{
        type:String,
        required:true
    },
    NTN_Registered:{
        type:String,
        required :true
    }

    })
    const AddShopinDatabase = mongoose.model("AddShop" , AddShop);
    export default AddShopinDatabase;