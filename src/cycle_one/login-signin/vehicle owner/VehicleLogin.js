
import { FcCheckmark } from "react-icons/fc";
import { Col, Row,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FaFacebookF, } from 'react-icons/fa'
import {BsTwitter, BsGoogle } from 'react-icons/bs'
const VehicleLogin = () =>{
    return(
        <>
         <div className='login owner_login'>


           <Row className="justify-content-md-center">
               <Col sm={12}>
              
                    <div className='owner_or_employee green '>
                        <img src="/images/cycle one/service_icons/Rectangle 101.png" />
                        <div className="inline-block"> Vehicle Owner</div>
                    </div>
               
                 
               </Col>
           
           </Row>
           <div className='login-with'>
                    <div>Login With</div>
                    <span className="icon"><BsGoogle /></span>
                    <span className="icon"><BsTwitter /></span>
                    <span className="icon"><FaFacebookF /></span>
           </div>
           <div className='orby'>
              <div className='absolute'>Or By</div>
           </div>
           <div className='main_input'>
               <label>Email</label>
               <input type='email' placeholder='handel@example.com'/>
                <div className='mark'><FcCheckmark /></div> 
               
           </div>
           <form>
            <div className='main_input'>
                <label>Password</label>
                <input type='password' placeholder='Type your password'/>
                <div className='mark'><FcCheckmark /></div> 
                </div>
                <div className="action">
                
                   <Link to='/login_process/reset'> <div className='blue forget_password '>Forgot Password !</div></Link>
                    <div>
                        <input className='checkbox' type="checkbox" /> 
                        <span>Remember Me For 7 days</span>
                    </div>
                    <div className='agree_privacy'>By logging in, you agree to our
                    <div><span className='blue'>Terms of Service </span> &amp; <span className='blue'>Privacy Policy</span></div>
                    </div>
                    <Link to='/employ'>
                       <input className='dark_button' type='submit' value='Login'/>
                    </Link>
                   
                    
                 </div>
           </form>
         </div>
        </>
    )
}

export default VehicleLogin