import React from "react";
import { Link, Navigate } from "react-router-dom";
function Button(props) {
  let themeClass = "bg-[#ce367c] text-white  hover:bg-white hover:text-[#ce367c] ";
  let roundClass = " rounded-full";


  if (props.theme === "secondary") {
    themeClass = 'bg-white text-black rounded-lg';
  }

  if (props.roundTheme === "full") {
    roundClass = " rounded-full";
  }


  return (

    <div className="pr-2">

      <Link to={props.href} className={"inline-flex justify-center px-6 py-2   font-medium  border  border-[#ce367c] shadow-sm   my-3 " + themeClass + roundClass}>{props.children}</Link>
    </div>
  );
}
export default Button;