import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

    const [action, setAction]=useState("Login");
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'> {action} </div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==="Login"? <div></div> :  <div className='input'>
            <input placeholder='  Enter your name' type="text" name="name" id="" />
        </div>}
       
        <div className='input'>
            <input placeholder='  Enter your email' type="email" name="email" id="" />
        </div>
        <div className='input'>
            <input placeholder='  Enter your password' type="password" name="password" id="" />
        </div>
        {action==="Login"? 
        <div className='forget-password'>
            Forget password ? <span>Click here !</span>
        </div>
         : 
          <div className='input'>
            
            <select name="role" id="">
                <option value="">Client</option>
                <option value="">Deliveryman</option>
            </select>
            
        </div>
         }
       
        <div className='submit-container'>
            <div className={action=="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign up")}} >Sign Up</div>
            <div  className={action=="Sign up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
