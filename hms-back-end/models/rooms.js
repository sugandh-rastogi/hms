import mongoose from "mongoose";

export const roomSchema=new mongoose.Schema({
    roomno:String,
    block:String,
    ac:String,
    seater: Number,
    seat: Number,
    
    
})

