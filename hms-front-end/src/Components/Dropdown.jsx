import React from 'react';
import Menu from './Menu';

function Dropdown() {
  return (

    <div className="hover:text-white" >

      <button className="inline-flex justify-center px-10 py-2   font-medium  border  border-[#ce367c] shadow-sm   my-3 bg-[#ce367c] text-white  hover:bg-white hover:text-[#ce367c] rounded-full" >Login</button>
      <div className="flex flex-col">
        <Menu to='studentlogin'>Student Login</Menu>
        <Menu to='wardenlogin'>Warden Login</Menu>
        <Menu to='adminlogin'>Admin Login</Menu>
      </div>
    </div>
  );
}

export default Dropdown;