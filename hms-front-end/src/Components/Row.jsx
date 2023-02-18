import React from 'react';
import { useParams } from 'react-router-dom';
import Link from 'react-scroll/modules/components/Link';

const Row=(props)=>{
    
    return(
        <button onClick={()=> 
            axios.post("http://localhost:8000/wardendashboard/:id/studentList",props)
      .then(res=>{
        
         if(res.data.student)
          {
            // setStudent(res.data.user)
            navigate(`/wardendashboard/:id/studentList/${res.data.student._id}`)
          }
          else{
            alert(res.data.message)
          }
      
      })}>
        <div className='text-white p-4 mb-2  grid  content-center gap-2 gap-x-5 lg:grid-cols-2 grid-cols-1 border rounded shadow'>
                <div className='flex '>
                    <p>Name :  </p>
                    <p>{props.children.firstName} {props.children.lastName}</p>
                </div>
                <div className='flex '>
                    <p>Admission No. :  </p>
                    <p>{props.children.admno}</p>
                </div>
                <div className='flex '>
                    <p>Block :  </p>
                    <p>{props.children.block}</p>
                </div>
                <div className='flex '>
                    <p>Room No :  </p>
                    <p>{props.children.roomno}</p>
                </div>
        </div>
        </button>
    )
}

export default Row;