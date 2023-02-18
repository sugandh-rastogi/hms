import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import {studentSchema} from "./models/studentModel.js"
import { wardenSchema } from "./models/wardendb.js"
import { adminSchema } from "./models/admindb.js"
import { roomSchema } from "./models/rooms.js"


const app=express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/studentdb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>{
    console.log('DB connected')
})

const Student=new mongoose.model("Student",studentSchema)
const Warden=new mongoose.model("Warden",wardenSchema)
const Admin=new mongoose.model("Admin",adminSchema)
const Rooms=new mongoose.model("Rooms",roomSchema)
app.post("/signup",(req,res)=>{
    const{firstName,lastName,email,phnno,address,city,state,password}=req.body
    Student.findOne({email:email},(err,student)=>
    {
        if(student){
            res.send({message:"Student already registered "})
        }else{
            const student=new Student({
                firstName,
                lastName,
                email,
                phnno,
                address,
                city,
                state,
                password
              })
              student.save(err=>{
                  if(err){
                      res.send(err) 
                      console.log(err)
                  }
                  else{
                      res.send({message:"Successfully registered"})
                  }
              })
        }
    })
    
})

//student login
app.post("/studentlogin",(req,res)=>{
    const {email,password}=req.body
    Student.findOne({email:email},(err,student)=>{
        if(student){
            if(password===student.password){

                res.send({message:"Login successful",student:student})
               
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send({message:"Student not registered"})
        }
    })
})

app.get("/dashboard/:id",(req,res)=>{
    Student.findOne({_id:req.params['id']},(err,student)=>{
            if(student){
                res.send({message:"data",student:student})
            }
    })

})
app.put("/dashboard/:id",(req,res)=>{
    
                Student.findOneAndUpdate({_id:req.params['id']},req.body)
                .then(()=>res.send({message:"Updated",student:req.body}))
                

})
app.put("/dashboard/:id/changePassword",(req,res)=>{
    const {password}=req.body
    Student.findOne({_id:req.params['id']},(err,student)=>{
        if(student){
            if(password===student.password){

                Student.findOneAndUpdate({_id:req.params['id']},{password:req.body.cpassword})
                .then(()=>res.send({message:"Updated",student:student}))
                
               
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send({message:"Student not registered"})
        }
    })
    

})
app.put("/dashboard/:id/roomallot",(req,res)=>{
     
    const {roomno}=req.body
    
       
    Student.findOneAndUpdate({_id:req.params['id']},req.body)
    
    .then(()=>
        res.send({message:"Updated",student:req.body}))
    })
       
        
 app.patch("/dashboard/:id/roomallot",(req,res)=>{
     
            const {roomno,block}=req.body
            
                           
                Rooms.findOne({roomno,block},(err,room)=>{
                    if(room){
                        console.log(room.seat)
                        Rooms.updateOne({roomno:roomno,block:block},{seat:(room.seat)-1},()=>
{
                        res.send({message:"sucess"})
                        console.log(room)})
                    }
                    else{
                    console.log(err)
                    res.send({message:err})}
                })
            });
            app.patch("/dashboard/:id/roomallot",(req,res)=>{
     
                const {roomno,block}=req.body
                
                               
                    Rooms.findOne({roomno,block},(err,room)=>{
                        if(room){
                            console.log(room.seat)
                            Rooms.updateOne({roomno:roomno,block:block},{seat:(room.seat)-1},()=>
    {
                            res.send({message:"sucess"})
                            console.log(room)})
                        }
                        else{
                        console.log(err)
                        res.send({message:err})}
                    })
                });
    
app.get("/dashboard/:id/roomallot",async(req,res)=>{
    await Rooms.find({seat: {$gte:1}},(err,rooms)=>{
            if(rooms)
                res.send({message:"data",rooms:rooms})
            
    })

})
//warden login
app.post("/wardenlogin",(req,res)=>{
    const {email,password}=req.body
    Warden.findOne({email:email},(err,warden)=>{
        if(warden){
            if(password===warden.password){
                res.send({message:"Login successful",warden:warden})
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send("Warden not registered")
        }
    })
})
app.get("/wardendashboard/:id",(req,res)=>{
    Warden.findOne({_id:req.params['id']},(err,warden)=>{
            if(warden){
                res.send({message:"data",warden:warden})
            }
    })

})

app.put("/wardendashboard/:id",(req,res)=>{
    
    Warden.findOneAndUpdate({_id:req.params['id']},req.body)
    .then(()=>res.send({message:"Updated",warden:req.body}))
    

})

app.put("/wardendashboard/:id/changePassword",(req,res)=>{
    const {password}=req.body
    Warden.findOne({_id:req.params['id']},(err,warden)=>{
        if(warden){
            if(password===warden.password){

                Warden.findOneAndUpdate({_id:req.params['id']},{password:req.body.cpassword})
                .then(()=>res.send({message:"Updated",warden:warden}))
                
               
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send({message:"Warden not registered"})
        }
    })
    

})
app.get("/wardendashboard/:id/studentList",(req,res)=>{
    Student.find({},(err,student)=>{
            if(student){
                res.send({message:"data",student:student})
            }
    })
    app.post("/wardendashboard/:id/studentList",(req,res)=>{
        const {admno}=req.body
        Student.findOne({admno},(err,student)=>{
            if(student){
               
                    res.send({message:"Login successful",student:student})
              
               
            }else{
                res.send({message:"Error"})
            }
        })
    })

})
app.post("/adminlogin",(req,res)=>{
    const {email,password}=req.body
    Admin.findOne({email:email},(err,admin)=>{
        if(admin){
            if(password===admin.password){
                res.send({message:"Login successful",admin:admin})
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send("Admin not registered")
        }
    })
})
app.get("/admindashboard/:id",(req,res)=>{
    Admin.findOne({_id:req.params['id']},(err,admin)=>{
            if(admin){
                res.send({message:"data",admin:admin})
            }
    })

})
 app.put("/admindashboard/:id",(req,res)=>{
    
    Admin.findOneAndUpdate({_id:req.params['id']},req.body)
    .then(()=>res.send({message:"Updated",admin:req.body}))
    

})

app.put("/admindashboard/:id/changePassword",(req,res)=>{
    const {password}=req.body
    Admin.findOne({_id:req.params['id']},(err,admin)=>{
        if(admin){
            if(password===admin.password){

                Admin.findOneAndUpdate({_id:req.params['id']},{password:req.body.cpassword})
                .then(()=>res.send({message:"Updated",admin:admin}))
                
               
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send({message:"Admin not registered"})
        }
    })
    

})
app.listen(8000,()=>{
    console.log("working")
})