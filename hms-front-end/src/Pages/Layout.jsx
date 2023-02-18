import React from 'react'

import H3 from '../Components/H3'
import P from '../Components/P'
import Button from '../Components/Button'
import Dropdown from '../Components/Dropdown'
import ContactForm from './ContactForm'
function Layout() {
  return (
    <div name="/">
      <div className=" h-screen bg-black flex flex-col justify-center ">


        <div className="flex flex-col self-center ">
          <H3>WELCOME</H3>
          <P>WE'RE GLAD YOU ARE HERE!</P>
        </div>
        <div className="flex justify-center pt-8 space-x-8">
          <Button href='signup'>Sign Up</Button>
          <Dropdown>Login</Dropdown>
        </div>

      </div >
      <ContactForm />
    </div>

  );
}
export default Layout;
