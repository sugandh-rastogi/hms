import React from 'react';
import { useFormik } from 'formik';
import Input from '../Components/Input';
import Er from '../Components/Er';
import Btn from '../Components/Btn';
import H1 from '../Components/H1';
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom"
const validate = values => {
  const errors = {};


  if (!values.roomno) {
    errors.roomno = 'Required';
  } 
  if (!values.block) {
    errors.block = 'Required';
  } 
 

  if (!values.transc) {
    errors.transc = 'Required';

  }
 



  return errors;
};


const RoomForm = () => {
  const {id}=useParams();
  console.log(`${id}`)
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
        roomno:"",
        block:"",
       
        transc:"",
    },
    validate,
    onSubmit: values => {
        console.log(values)
        
    axios.put(`http://localhost:8000/dashboard/${id}/roomallot`,formik.values)
      .then(res=>{
        console.log(res.data.message)
        alert(res.data.message)
        formik.setValues(res.data.student)
      })
    axios.patch(`http://localhost:8000/dashboard/${id}/roomallot`,formik.values)
      .then(res=>{
        console.log(res.data.message)
        
      })
     
    },
  });
  return (<div name="signup" className="h-screen pt-20 xl:px-80 sm:px-52 px-5 bg-black -mt-32">
    
    <form className='ml-20 ' onSubmit={formik.handleSubmit} >
    <H1>Room Deatil and Fee deatil</H1>
      <div className="content-center gap-4 gap-x-20 grid  grid-cols-1">

        <div>
          <Input id="roomno"
            name="Room No."
            type="text"
            values={formik.values.roomno}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />


          {formik.errors.roomno ? <Er>{formik.errors.roomno}</Er> : null}
        </div>

        <div>
          <Input id="block"
            name="Block"
            type="text"

            values={formik.values.block}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.block ? <Er>{formik.errors.block}</Er> : null}
        </div>

        
        <div>
          <Input id="transc"
            name="Transaction Id"
            type="text"

            values={formik.values.transc}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.transc ? <Er>{formik.errors.transc}</Er> : null}
        </div>
        <Btn type="submit" >Submit</Btn>
      </div>

      

    </form>

  </div>
  );
};

export default RoomForm;