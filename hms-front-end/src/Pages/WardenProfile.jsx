import React from 'react';
import { useFormik } from 'formik';
import Input from '../Components/Input';
import Er from '../Components/Er';
import Btn from '../Components/Btn';
import Button from '../Components/Button';
import H1 from '../Components/H1';
import Layout from './Layout';
import { Link,useParams } from 'react-router-dom';
import axios from 'axios';

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }
  else if (!/^[A-Z]{1,30}$/i.test(values.firstName)) {
    errors.firstName = 'Must contain characters only';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';

  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }
  else if (!/^[A-Z]{1,30}$/i.test(values.lastName)) {
    errors.lastName = 'Must contain characters only';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.phnno) {
    errors.phnno = 'Required';

  } else if (values.phnno.length > 10) {
    errors.phnno = 'Must be 10 digits';
  }
  else if (!/^[0-9]{10,10}$/i.test(values.phnno)) {
    errors.phnno = 'Invalid phone no.';
  }
  if (!values.address) {
    errors.address = 'Required';

  }
  if (!values.city) {
    errors.city = 'Required';

  }
  if (!values.state) {
    errors.state = 'Required';

  }
  if (!values.pincode) {
    errors.pincode = 'Required';

  }


  return errors;
};


const Profile = () => {
  const {id}=useParams();
  console.log(`${id}`)
const [student,setStudent]=React.useState("")
 

    
  const formik =  useFormik(
    {
    
    initialValues: {
      firstName: student.firstNmae,
      lastName: "",
      email: "",
      phnno: "",
      address: "",
      city:"",
      state: "",
      pincode: "",

    },
    validate,

    onSubmit: values => {
      if(location.pathname===`/wardendashboard/${id}`)
      {axios.put(`http://localhost:8000/wardendashboard/${id}`,formik.values)
      .then(res=>{
        alert(res.data.message)
        formik.setValues(res.data.warden)
      })}
      else if(location.pathname===`/admindashboard/${id}`)
      {axios.put(`http://localhost:8000/admindashboard/${id}`,formik.values)
      .then(res=>{
        alert(res.data.message)
        formik.setValues(res.data.admin)
      })}
      
    },
    
  });
  React.useEffect(()=>{ axios.get(`http://localhost:8000/wardendashboard/${id}`)
  
      .then(res=>{
        
       formik.setValues(res.data.warden)
      
      })},[`http://localhost:8000/wardendashboard/${id}`],[formik.values])
      
      React.useEffect(()=>{ axios.get(`http://localhost:8000/admindashboard/${id}`)
  
      .then(res=>{
        
       formik.setValues(res.data.admin)
      
      })},[`http://localhost:8000/admindashboard/${id}`],[formik.values])

      console.log(formik.values)

if(formik.values){
  return (<div name="signup"className="h-screen xl:px-32 sm:px-10 px-5 md:ml-48 bg-black pt-32">
    <H1>Profile</H1>
    
    <form onSubmit={formik.handleSubmit} >
      <div className="content-center gap-2 gap-x-16 grid lg:grid-cols-2 grid-cols-1">
        <div>
          <Input id="firstName"
            name="First Name"
            type="text"
            values={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.firstName ? <Er>{formik.errors.firstName}</Er> : null}
        </div>
        <div>
          <Input id="lastName"
            name="Last Name"
            type="text"
            values={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.lastName ? <Er>{formik.errors.lastName}</Er> : null}
        </div>
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
          <Input id="phnno"
            name="Phone No."
            type="tel"
            pattern="[0-9]"
            values={formik.values.phnno}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.phnno ? <Er>{formik.errors.phnno}</Er> : null}
        </div>
        <div>
          <Input id="address"
            name="Address"
            type="text"

            values={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.address ? <Er>{formik.errors.address}</Er> : null}
        </div>
        <div>
          <Input id="city"
            name="City"
            type="text"

            values={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.city ? <Er>{formik.errors.city}</Er> : null}
        </div>
        <div>
          <Input id="state"
            name="State"
            type="text"

            values={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.state ? <Er>{formik.errors.state}</Er> : null}
        </div>
        <div>
          <Input id="pincode"
            name="Pincode"
            type="text"

            values={formik.values.pincode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />

          {formik.errors.pincode ? <Er>{formik.errors.pincode}</Er> : null}
        </div>

      </div>

      <Btn type="submit">Update</Btn>

    </form>

  </div>
  );
}

else
 { return(<h1>404 Page not found</h1>)
}
};
export default Profile;