import React from 'react';

function H2(props) {
  let themeClass = " hover:underline hover:decoration-[#ce367c] hover:decoration-2 hover:underline-offset-[16px] px-4";
  if (props.theme == 'hover') {
    themeClass = 'hover:bg-[#ce367c] px-10'
  }
  return (

    <h2 className={"text-white  " + themeClass}>{props.children}</h2>
  )
}
export default H2;