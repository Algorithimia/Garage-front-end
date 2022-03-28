import { useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import { Col, Row,Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import {FaFacebookF } from 'react-icons/fa'
import {BsTwitter, BsGoogle } from 'react-icons/bs'
import {login} from '../../../store/store slices/auth'
import { useDispatch,useSelector } from 'react-redux'

const EmployLogin = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loggedIn,isLoading,error}= useSelector((state)=>state.auth)
    const[formData, setFormData]= useState({
        email:'',
        password:''
    })
    const {email, password }=formData
    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {
        e.preventDefault()
           dispatch( login(formData))
           navigate('/employ')
    }
   
    return(
        <>
         {loggedIn && navigate('/employ')}
         {isLoading ?   <img className='login' src="/images/giphy.gif" /> :
         <div className='login owner_login'>


           <Row className="justify-content-md-center">
               <Col sm={12}md={5}>
                   
               <Link to='/login_process/owner_login'>
                    <div className='owner_or_employee '>
                        <img src="/images/cycle one/service_icons/icon_2.png" />
                        <div className="inline-block"> Garage Owner </div>
                    </div>
                </Link>
                 
               </Col>
               <Col sm={12} md={5}>
                  <div className='owner_or_employee active'>
                  <img src="/images/cycle one/service_icons/icon_2.png" />
                  <div className="inline-block"> Garage Employee   </div>
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
           <form onSubmit={e=>onSubmit(e)}>
           {error&& <div className='msg-error'>{ Object.values(error)}</div> }
           <div className='main_input'>
               <label>Email</label>
               <input type='email' placeholder='handel@example.com'  name="email" value={email} onChange={e=>onChange(e)} required  />
                <div className='mark'><FcCheckmark /></div> 
               
           </div>
          
            <div className='main_input'>
                <label>Password</label>
                <input type='password' placeholder='Type your password'  name="password" value={password} onChange={e=>onChange(e)} required />
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
                   
                       <input className='dark_button' type='submit' value='Login'/>
                
                   
                    
                 </div>

                 </form>
        
         </div>
}
        </>
    )
}
export default EmployLogin