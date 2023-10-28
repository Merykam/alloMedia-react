import React, { useState } from 'react'
import './LoginSignup.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';




const LoginSignup = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role:''
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/auth/signup', formData);
            console.log(response.data); // Gérer la réponse de l'API ici
            // Réinitialiser le formulaire ou rediriger l'utilisateur après l'inscription réussie


        } catch (error) {
            console.error(error); // Gérer les erreurs ici
        }
    };


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8000/api/auth/signin', formData);
            console.log(response.data); 
            if (response.data.success) {
                
                const name = response.data.data.name;
                const role = response.data.data.role;
                const token = response.data.data.token;
                Cookies.set('token', token, { expires: 1 / 24 });

                switch(role){
                    case 'livreur': navigate('dashboard/livreur', { state: {name, role} })
                        break;
                    case 'client': navigate('dashboard/client', { state: {name, role} })
                        break;
                    case 'manager': navigate('dashboard/manager', { state: {name, role} })
                        break;
                     default:
                            console.log(`the user has no role`);
                }
                console.log(name);
                
            }
            // Gérer la réponse de l'API ici
            // Réinitialiser le formulaire ou rediriger l'utilisateur après l'inscription réussie
        } catch (error) {
            console.error(error); // Gérer les erreurs ici
        }
    };

    const [action, setAction]=useState("Login");
  return (
    <div className='container'>


    <form  onSubmit={ action === "Sign up"? handleSignup : handleLogin}>

     
      <div className='header'>
        <div className='text'> {action} </div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login"? <div></div> :  <div className='input'>
            <input placeholder='  Enter your name' type="text" name="name" onChange={handleInputChange}  />
        </div>}
       
        <div className='input'>
            <input placeholder='  Enter your email' type="email" name="email" onChange={handleInputChange}/>
        </div>
        <div className='input'>
            <input placeholder='  Enter your password' type="password" name="password"onChange={handleInputChange} />
        </div>
        {action==="Login"? 
        <div className='forget-password'>
            Forget password ? <span>Click here !</span>
        </div>
         : 
         <div className='input'>
         <input placeholder='  Enter your role' type="text" name="role" onChange={handleInputChange}/>
     </div>
        //   <div className='input'>
            
        //     <select name="role" id="">
        //         <option value="">Client</option>
        //         <option value="">Deliveryman</option>
        //     </select>

        // </div>
         }
       
        <div className='submit-container'>
            <button type="submit">Register</button>
            <div className={action=="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}} >Sign Up</div>
            <div  className={action=="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>
      </form>

    </div>

    
  );
  
}

export default LoginSignup
