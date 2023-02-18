import React from 'react';
import { Link } from 'react-router-dom';

function Menu(props) {
  return (
    <Link to={props.to} className="hover:text-white hover:border hover:border-[#ce367c] px-2 " >
      {props.children}
    </Link>
  );
}

export default Menu;
