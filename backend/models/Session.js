import mongoose from "mongoose";

const  sessioSchema = new mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true})

export const Session = mongoose.model("Session", sessioSchema)

export default Session;
