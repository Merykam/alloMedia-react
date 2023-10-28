import axios from 'axios';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Manager = () => {

    
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.state.name)
    const handleLogout = async () => {
      try {
        
        await axios.get('http://localhost:8000/api/auth/signout' ,{
          withCredentials: true  
        });
  
       
        navigate('/');
      } catch (error) {
        console.error('Erreur lors de la déconnexion : ', error);
      }
    };

  return (
    <div>
        
        <h1>Helloo {location.state.role} {location.state.name}</h1>
        <button onClick={handleLogout}>Logout gg</button>
      
    </div>
  )
}

export default Manager
