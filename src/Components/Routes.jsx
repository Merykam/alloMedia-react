
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import VerifedMail from './verifedMail';
import LoginSignup from './LoginSignup/LoginSignup';
import Livreur from './Dashboards/Livreur';
import Manager from './Dashboards/Manager';
import Client from './Dashboards/Client';



const MainRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/verified-mail" element={<VerifedMail></VerifedMail> }/>
        <Route path="/" element={<LoginSignup/> }/>
        <Route path="/dashboard/livreur" element={<Livreur/>}/>
        <Route path="/dashboard/manager" element={<Manager/>}/>
        <Route path="/dashboard/client" element={<Client/>}/>
      </Routes>
    </div>
  )
}

export default MainRoutes


