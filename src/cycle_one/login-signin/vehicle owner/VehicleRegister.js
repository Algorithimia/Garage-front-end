import React ,{useState} from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FcCheckmark } from "react-icons/fc";
import {FaFacebookF, } from 'react-icons/fa'
import {BsTwitter, BsGoogle } from 'react-icons/bs'

import PropTypes from 'prop-types'
import { Col, Row } from "react-bootstrap";
const VehicleRegister = ({ownerregister}) =>{
    const [formData, setFormData] = useState({
        workshopname:'',
        workshopAddress:'',
        name: '',
        phone:'',
        email: '',
        password: '',
        password2:''
    })

    const {workshopname,workshopAddress, name,phone , email, password, password2}=formData

    const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
    const onSubmit= async e => {
        e.preventDefault()
        if(password !== password2){
        //     setAlert('password do not match', 'danger')
        // }
        console.log('password not match')
        }
        else{
           
            ownerregister({workshopname,workshopAddress, name,phone , email, password})
        }
    }
    return(
        <>
         <div className='login owner_register'>
            <div className='owner_or_employee green'>
                        <img src="/images/cycle one/service_icons/Rectangle 101.png" />
                        <div className="inline-block"> Vehicle Owner </div>
             </div>
             <div className='login-with'>
                    <div>Sign Up With</div>
                    <span className="icon"><BsGoogle /></span>
                    <span className="icon"><BsTwitter /></span>
                    <span className="icon"><FaFacebookF /></span>
           </div>

            <form  onSubmit = {e=>onSubmit(e)}>
     
          
           <div className='main_input'>
               <label> Name</label>
               <input onChange={e=>onChange(e)} required type='text' placeholder='Jessica Hayes'  name="name" value={name} />
                <div className='mark'><FcCheckmark /></div> 
               
           </div>
           <div className='main_input'>
               <label>Email</label>
               <input onChange={e=>onChange(e)} required type='email' placeholder='handel@example.com'  name="email" value={email} />
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Phone Number</label>
               <input onChange={e=>onChange(e)} required type='tel' placeholder='+1 (999) 278 589 2'  name="phone" value={phone} />
                <div className='mark'><FcCheckmark /></div> 
               
           </div>
           <div className='adress'>
                <Row>
                    <Col sm={4}>
                            <div className='main_input'>
                                <label>Country</label>
                                <input  value='' ></input>
                                 <select>
                                  <option>Egypt</option>   
                                  <option> Germany</option>    
                                 </select> 
                            
                        </div>
                    </Col>
                    <Col sm={4}>
                    <div className='main_input'>
                                <label>City</label>
                                <input  value='' ></input>
                                 <select>
                                  <option>Cairo</option>   
                                  <option> Giza</option>    
                                 </select> 
                            
                        </div>
                    
                    </Col>
                    <Col sm={4}>
                    <div className='main_input'>
                                <label>Area</label>
                                <input  value='' ></input>
                                 <select>
                                  <option>Dokki</option>   
                                  <option> Giza</option>    
                                 </select> 
                            
                        </div>
                    
                    </Col>
                </Row>
           </div>
           <div className='main_input'>
               <label>Detailed Address</label>
               <input onChange={e=>onChange(e)} required type='text' placeholder='Enter your Address'   />
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

      

           <div className='main_input'>
               <label>Password</label>
               <input onChange={e=>onChange(e)} required type='password' placeholder='Type your password'  name="password" value={password}  />
                <div className='mark'><FcCheckmark /></div> 
               
           </div>

           <div className='main_input'>
               <label>Confirm Password</label>
               <input onChange={e=>onChange(e)} required type='password' placeholder='Type your password'  name="password2" value={password2} />
               <div className='mark'><FcCheckmark /></div> 
               

           </div>
            
            


            <div className="action">
                    <div className='agree_privacy'>By logging in, you agree to our
                    <div><span className='blue'>Terms of Service </span> &amp; <span className='blue'>Privacy Policy</span></div>
                    </div>
                     <Link to='/login_process/confirmation'> 
                        
                         <input className='dark_button' type='submit' value='Signup'/> 
                         </Link>
                    
                    <div className='sign_up'>Don't Have Account ! <Link to='/login_process/owner_login'><span className='blue'>LOGIN</span></Link> </div>
                 </div>
                 </form>     

         </div>
        </>
    )
}


export default VehicleRegister