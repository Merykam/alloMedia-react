
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import VerifedMail from './verifedMail';
import LoginSignup from './LoginSignup/LoginSignup';
import Livreur from './Dashboards/Livreur';
import Manager from './Dashboards/Manager';
import Client from './Dashboards/Client';
import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';
import Toverify from './Toverify';



const MainRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/verified-mail" element={<VerifedMail></VerifedMail> }/>
        <Route path="/" element={<LoginSignup/> }/>
        <Route path="/dashboard/livreur" element={<Livreur/>}/>
        <Route path="/dashboard/manager" element={<Manager/>}/>
        <Route path="/dashboard/client" element={<Client/>}/>
        <Route path="/forgetPassword" element={<ForgetPassword/>}/>
        <Route path="/reset-password/:token" element={<ResetPassword/>}/>
        <Route path="/toverify" element={<Toverify/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes


