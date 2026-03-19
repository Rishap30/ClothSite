import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/clothsite`)
        console.log(`MongoDB Connected successfully`);
    }catch(error){
        console.log("MongoDB connection failed :",error);
    }
}

export default connectDB;
