
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import VerifedMail from './verifedMail';
import LoginSignup from './LoginSignup/LoginSignup';


const MainRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path="/verified-mail" element={<VerifedMail></VerifedMail> }/>
        <Route path="/" element={<LoginSignup/> }/>
      </Routes>
    </div>
  )
}

export default MainRoutes


