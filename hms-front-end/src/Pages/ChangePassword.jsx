import React from 'react';
import { useFormik } from 'formik';
import Input from '../Components/Input';
import Er from '../Components/Er';
import Btn from '../Components/Btn';
import Button from '../Components/Button';
import H1 from '../Components/H1';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const validate = values => {
  const errors = {};
  if (!values.password) {
    errors.password = 'Required';

  }

  if (!values.npassword) {
    errors.npassword = 'Required';

  }
  else if (values.npassword.length < 8) {
    errors.npassword = 'Password should be atleast of length 8';
  }
  if (!values.cpassword) {
    errors.cpassword = 'Required';

  }
  else if (values.npassword != values.cpassword) {
    errors.cpassword = 'Password doesnot match';
  }



  return errors;
};


const ChangePassword = () => {
  const navigate=useNavigate()
  const {id}=useParams();
  const formik = useFormik({
    initialValues: {

      password: '',
      npassword: '',
      cpassword: '',

    },
    validate,
    onSubmit: values => {
      if(location.pathname===`/dashboard/${id}/changePassword`)
     { axios.put(`http://localhost:8000/dashboard/${id}/changePassword`,formik.values)
      .then(res=>{
        alert(res.data.message)
        navigate(`/studentlogin`)
      })}
      else if(location.pathname===`/wardendashboard/${id}/changePassword`)
      { axios.put(`http://localhost:8000/wardendashboard/${id}/changePassword`,formik.values)
       .then(res=>{
         alert(res.data.message)
         navigate(`/wardenlogin`)
       })}
       else if(location.pathname===`/admindashboard/${id}/changePassword`)
       { axios.put(`http://localhost:8000/admindashboard/${id}/changePassword`,formik.values)
        .then(res=>{
          alert(res.data.message)
          navigate(`/admintlogin`)
        })}
       
     
    },
  });
  return (<div name="signup" className="h-screen xl:px-80 md:ml-36 sm:px-52 px-5 bg-black pt-32">
    <H1>Change Password</H1>
    <form onSubmit={formik.handleSubmit} >
      <div className="content-center gap-4 gap-x-20 grid  grid-cols-1">
        <div>
          <Input id="password"
            name="Current Password"
            type="password"

            values={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.password ? <Er>{formik.errors.password}</Er> : null}
        </div>

        <div>
          <Input id="npassword"
            name="New Password"
            type="password"

            values={formik.values.npassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.npassword ? <Er>{formik.errors.npassword}</Er> : null}
        </div>
        <div>
          <Input id="cpassword"
            name="Confirm Password"
            type="password"

            values={formik.values.cpassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.cpassword ? <Er>{formik.errors.cpassword}</Er> : null}
        </div>

      </div>

      <Btn type="submit">Submit</Btn>

    </form>

  </div>
  );
};

export default ChangePassword;