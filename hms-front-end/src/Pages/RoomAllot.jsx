import React from 'react';
import { useFormik } from 'formik';
import Input from '../Components/Input';
import Er from '../Components/Er';
import Btn from '../Components/Btn';

import H1 from '../Components/H1';
import axios from "axios"
import {useNavigate, useParams} from "react-router-dom"
import Room from "../Components/Room"
import RoomForm from "../Components/RoomForm"


const RoomAllot = () => {
  const navigate=useNavigate()
  const [room,setRoom]=React.useState("")
  // axios.post("http://localhost:8000/dashboard/${id}/roomallot",)
  //   .then(navigate('/studentlogin'))
 
  const [formVisible,setFormVisibility]=React.useState(false);
  const showForm=()=>setFormVisibility(true);

  const hideForm=()=>setFormVisibility(false);

  const {id}=useParams()
   
  const show=()=>{
    setFormVisibility(!formVisible)
  }

  React.useEffect(()=>{ axios.get(`http://localhost:8000/dashboard/${id}/roomallot`)

  .then(res=>{
    
   setRoom(res.data.rooms.map((e)=><Room>{e}</Room>))

  })},[])
  return (<div className='flex content-between flex-col'>
  <div name="signup" className="h-screen  ml-56 xl:px-32 sm:px-10 px-5 bg-black pt-32">
    <H1>Room List</H1>
    {room}

    {!formVisible && <Btn onClick={show}>Allocate</Btn>}
    </div>
      {formVisible && <RoomForm />}
  
  </div>
  );
};



export default RoomAllot;

