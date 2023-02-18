import React from 'react'

function Btn(props) {
  return (
    <button onClick={props.onClick} className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 mt-8 mb-4 mx-auto flex items-center" type={props.type}>{props.children}</button>

  );
}

export default Btn;