import mongoose from "mongoose";


export const studentSchema=new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phnno: Number,
    address: String,
    city: String,
    state: String,
    password: String,
    pincode:String,
    course:String,
    admno:String,
    feeStatus:String,
    roomno:String,
    block:String,
    transc:String,
    
})

