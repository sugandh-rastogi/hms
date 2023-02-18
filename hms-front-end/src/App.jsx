import React from 'react';
import Nav from './Components/Nav'

import Layout from './Pages/Layout';
import Signup from './Pages/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactForm from './Pages/ContactForm';
import Loginst from './Pages/Loginst'
import Dashboard from './Components/Dashboard'
import WDashboard from './Components/WDashboard'
import AdminDashboard from './Components/AdminDashboard'
import Loginw from './Pages/Loginw'
import Logina from './Pages/Logina'
import Profile from './Pages/Profile'
import WardenProfile from './Pages/WardenProfile'
import ChangePassword from './Pages/ChangePassword'
import StudentList from './Pages/StudentList';
import RoomAllot from './Pages/RoomAllot';
import ComplainForm from './Pages/ComplainForm';
function App() {
  const [student,setStudent]=React.useState({})
  
  return (
    <div className="bg-black h-screen">

      <BrowserRouter>
        < Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Layout />} />

            <Route path="contact" element={<ContactForm />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="studentlogin" element={<Loginst setStudent={setStudent}  />}></Route>
            <Route path="wardenlogin" element={<Loginw />}></Route>
            <Route path="adminlogin" element={<Logina />}></Route>
            <Route path="/dashboard/:id" element={<Dashboard />}>
              <Route index element={<Profile ></Profile>} />
              <Route path="changePassword" element={<ChangePassword />}></Route>
              <Route path="roomallot" element={<RoomAllot />}></Route>
              <Route path="complainform" element={<ComplainForm />}></Route>


            </Route>
            <Route path="/wardendashboard/:id" element={<WDashboard />}>
              <Route index element={<WardenProfile/>} />
              <Route path="changePassword" element={<ChangePassword />}></Route>
              <Route path="studentList" element={<StudentList />}></Route>

            </Route>
            <Route path="/admindashboard/:id" element={<AdminDashboard />}>
              <Route index element={<WardenProfile/>} />
              <Route path="changePassword" element={<ChangePassword />}></Route>


            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;