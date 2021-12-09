

import { FcCheckmark } from "react-icons/fc";
import { Col, Row,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Owner_login = () =>{
    return(
        <>
         <div className='owner_login'>


           <Row className="justify-content-md-center">
               <Col sm={12}md={5}>
                  <div className='owner_or_employee active'>
                      <img src="images/cycle one/service_icons/icon_2.png" />
                      Garage Owner
                  </div>
                 
               </Col>
               <Col sm={12} md={5}>
                  <div className='owner_or_employee'>
                  <img src="images/cycle one/service_icons/icon_2.png" />
                   Garage Employee 
                  </div>
                 
               </Col>
           </Row>
           <div className='login_input'>
               <label>Email</label>
               <input type='email' placeholder='handel@example.com'/>
                <div className='mark'><FcCheckmark /></div> 
               
           </div>
           <form>
            <div className='login_input'>
                <label>Password</label>
                <input type='password' placeholder='Type your password'/>
                <div className='mark'><FcCheckmark /></div> 
                <div className='blue forget_password '>Forgot Password !</div>
                <div>
                    <input className='checkbox' type="checkbox" /> 
                    <span>Remember Me For 7 days</span>
                </div>
                <div className='agree_privacy'>By logging in, you agree to our
                <div><span className='blue'>Terms of Service </span> &amp; <span className='blue'>Privacy Policy</span></div>
                </div>
                <input className='dark_button' type='submit' value='Login'/>
                <div className='sign_up'>Don't Have Account ! <Link to=''><span className='blue'>SIGNUP</span></Link> </div>
            </div>
           </form>
         </div>
        </>
    )
}
export default Owner_login