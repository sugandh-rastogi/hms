import React from 'react';


const Room = (props) => {
  return (
    <div className='text-white p-2 grid grid-cols-5  '>
    <label >
   
    Room No.: {props.children.roomno} 
  </label>
  <label >
 Block: {props.children.block}  
  </label>
  <label >
   
    AC/Non-Ac: {props.children.ac} 
  </label>
  <label >
   Seater: {props.children.seater} 
  </label>
  <label >
   Seat: {props.children.seat} 
  </label>
  </div>
  );
}

export default Room;

