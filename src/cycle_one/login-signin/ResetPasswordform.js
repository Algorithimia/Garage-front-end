import React from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const ResetPasswordform = () => {
  return <div className='login password_form'>
      <div class="title">Please Enter Your Email To Receive The Code</div>
      <form>
      <div className='main_input'>
               <label>Password</label>
               <input  required type='password' placeholder='●●●●●●●●●●●●'  name="password"   />
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Confirm Password</label>
               <input  required type='password' placeholder='●●●●●●●●●●●●'  name="password2"  />
               <div className='mark'><FcCheckmark /></div> 
               

           </div>
           <Link to='/login_process/owner_login'>
              <input className='dark_button' type='submit' value='Reset'/>
           </Link>
        </form>  
  </div>;
};

export default ResetPasswordform;
