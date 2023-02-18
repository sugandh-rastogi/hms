import mongoose from "mongoose";

export const wardenSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phnno: Number,
    address: String,
    city: String,
    state: String,
    password: String,
    pincode:String,
})

