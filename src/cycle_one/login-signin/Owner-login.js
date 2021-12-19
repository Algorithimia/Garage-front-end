

import { FcCheckmark } from "react-icons/fc";
import { Col, Row,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Owner_login = () =>{
    return(
        <>
         <div className='login owner_login'>


           <Row className="justify-content-md-center">
               <Col sm={12}md={5}>
                  <div className='owner_or_employee active'>
                      <img src="/images/cycle one/service_icons/icon_2.png" />
                     <div className="inline-block"> Garage Owner </div>
                  </div>
                 
               </Col>
               <Col sm={12} md={5}>
                  <div className='owner_or_employee'>
                  <img src="/images/cycle one/service_icons/icon_2.png" />
                  <div className="inline-block"> Garage Employee   </div>
                  </div>
                 
               </Col>
           </Row>
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
                   <Link to='/login_process/forget'> <div className='blue forget_password '>Forgot Password !</div></Link>
                    <div>
                        <input className='checkbox' type="checkbox" /> 
                        <span>Remember Me For 7 days</span>
                    </div>
                    <div className='agree_privacy'>By logging in, you agree to our
                    <div><span className='blue'>Terms of Service </span> &amp; <span className='blue'>Privacy Policy</span></div>
                    </div>
                    <Link to='/workshop/owner/dashbord'>
                       <input className='dark_button' type='submit' value='Login'/>
                    </Link>
                    <div className='sign_up'>Don't Have Account ! <Link to='/login_process/owner_sign_in'><span className='blue'>SIGNUP</span></Link> </div>
                 </div>
           </form>
         </div>
        </>
    )
}
export default Owner_login