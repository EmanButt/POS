import mongoose from "mongoose";

const connecttodatabase = async() => {
try {
    await mongoose.connect(`mongodb+srv://Eman-Butt:YJk_Eg5mMDB-XPn@cluster0.r5n9iew.mongodb.net/Newdb`, {
    });

    
    console.log(`connected to database`);

}
catch(error){
    console.error(`error connecting to mongodb:`,error.message);
}
};
export default connecttodatabase;




