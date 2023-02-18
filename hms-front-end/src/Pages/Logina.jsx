import React from 'react';
import { useFormik } from 'formik';
import Input from '../Components/Input';
import Er from '../Components/Er';
import Btn from '../Components/Btn';
import Button from '../Components/Button';
import H1 from '../Components/H1';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const validate = values => {
  const errors = {};


  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }


  if (!values.password) {
    errors.password = 'Required';

  }
  else if (values.password.length < 8) {
    errors.password = 'Password should be atleast of length 8';
  }



  return errors;
};


const Logina = () => {
  const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {

      email: '',

      password: '',

    },
    validate,
    onSubmit: values => {
      axios.post("http://localhost:8000/adminlogin",formik.values)
      .then(res=>{
       
        if(res.data.admin)
        {
          // setStudent(res.data.user)
          navigate(`/admindashboard/${res.data.admin._id}`)
        }
        else{
          alert(res.data.message)
        }
    
      })
    },
  });
  return (<div name="signup" className="h-screen xl:px-80 sm:px-52 px-5 bg-black pt-32">
    <H1>Admin Login</H1>
    <form onSubmit={formik.handleSubmit} >
      <div className="content-center gap-4 gap-x-20 grid  grid-cols-1">

        <div>
          <Input id="email"
            name="Email Address"
            type="email"
            values={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />


          {formik.errors.email ? <Er>{formik.errors.email}</Er> : null}
        </div>

        <div>
          <Input id="password"
            name="Password"
            type="password"

            values={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.password ? <Er>{formik.errors.password}</Er> : null}
        </div>

      </div>

      <Btn type="submit">Login</Btn>

    </form>

  </div>
  );
};

export default Logina;