import React from "react";
import Row from "../Components/Row"
import axios from 'axios'
import { useParams } from "react-router-dom";
import H1 from "../Components/H1";
const StudentList=()=>{
    const {id}=useParams();
    const [student,setStudent]=React.useState("")

    React.useEffect(()=>{ axios.get(`http://localhost:8000/wardendashboard/${id}/studentList`)
  
    .then(res=>{
      
     setStudent(res.data.student.map((e)=><Row>{e}</Row>))

    })},[])
    console.log(student)
    
    return(
       <div className="pt-32 ml-56  flex  flex-col w-4/6 p-10  bg-black">
        <H1>Student List</H1>
        <div className="flex justify-center flex-col ">
        {student}
        </div>
       </div>
    )
}

export default StudentList;