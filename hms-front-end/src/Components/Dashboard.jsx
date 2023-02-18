import React from 'react';
import H2 from './H2';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link,useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Profile from '../Pages/Profile';

const Dashboard = () => {
  const [nav, setNav] = React.useState(false);
  const handleClick = () => setNav(!nav);
 const {id}=useParams();
  
  return (
    <div>


      <div className="fixed flex md:border-r-2 md:border-[#ce367c] h-screen justify-start  md:justify-center py-14 w-full md:w-fit text-white ">
        <ul className="hidden md:flex md:flex-col">
          <li>
            <Link to={`/dashboard/${id}` }>
              <H2 theme='hover'>Profile</H2>
            </Link>
          </li>
         

          <li>
           
            <Link to="changePassword" >
              <H2 theme='hover'>Change Password</H2>
            </Link>
          </li>
          <li>
           
            <Link to="roomallot" >
              <H2 theme='hover'>Room Allot</H2>
            </Link>
          </li>
          <li>
           
            <Link to="complainform" >
              <H2 theme='hover'>Complain Form</H2>
            </Link>
          </li>
          <li>
            <Link to="/" >
              <H2 theme='hover'>Log Out</H2>
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

      <Outlet />
    </div>
  );
};

export default Dashboard;
