import React from 'react';
import H2 from './H2';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const Nav = () => {
  const [nav, setNav] = React.useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div>
      <div className="space-y-4 md:space-y-10 2xl:space-y-20">
        <svg
          className=" fixed w-full "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 50"
        >
          <path
            fill="#ce367c"
            fill-opacity="1"
            d="M-0.93,7.84 C249.06,54.82 225.94,-31.17 501.56,28.82 L500.00,0.00 L-1.56,-12.16 Z"
          />
        </svg>
        <div className="fixed w-full h-[70px] flex  justify-end items-center  px-4  text-white">
          <ul className="hidden md:flex">
            <li>
              <Link to="/" >
                <H2>Home</H2>
              </Link>
            </li>
            <li>
              <Link to="about" >
                <H2>About</H2>
              </Link>
            </li>

            <li>
              <Link to="contact" >
                <H2>Contact</H2>
              </Link>
            </li>
          </ul>

          <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
          </div>
          <ul
            className={
              !nav
                ? 'hidden'
                : 'absolute left-0 top-0 w-full h-screen bg-black flex flex-col justify-center items-center'
            }
          >
            <li className="py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="home"

              >
                Home
							</Link>
            </li>
            <li className="py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="about"

              >
                About
							</Link>
            </li>

            <li className="py-6 text-4xl">
              <Link
                onClick={handleClick}
                to="contact"

              >
                Contact
							</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-black h-full'>
      <Outlet />
      </div>
    </div>
  );
};

export default Nav;
