import React,{useState} from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import FlashMsg from "../workshops/components/FlashMsg"
const ResetPasswordform = () => {
  const[flashmsg,setFlashmsg] = useState(true)
  return <div className='login password_form'>
     {flashmsg&&<FlashMsg 
                            title="Still Under Development !"
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setFlashmsg}
                            icontype='info-icon'
                    />}
      <div class="title">Please Reset Your New Password</div>
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
