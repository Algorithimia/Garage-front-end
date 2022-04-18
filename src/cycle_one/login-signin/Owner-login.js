import { useEffect, useState } from "react";
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
import { Col, Row,Container } from 'react-bootstrap'
import { Link , useNavigate} from 'react-router-dom'

import {login,logOut, clearstate} from '../../store/store slices/auth'
import{getUserDetails} from '../../store/store slices/detailUser'
import { useDispatch,useSelector } from 'react-redux'
//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';

    

  



const Owner_login = () =>{
    // yup validation
    let schema = yup.object().shape({
   
        email: yup.string().email('Enter a Valid Email').required("Email is required"),
        password: yup.string().min(5,'password at least 5 characters').max(10, 'password max 10 characters'),
       
      });

      // end  yup 
    const {userDetails}= useSelector((state)=>state.userDetails)
    const [showAlert, setShowAlert]= useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {loggedIn, isLoading,error}= useSelector((state)=>state.auth)
    //get user details 
   
    useEffect(() =>{  
      dispatch(getUserDetails())
     
      
    },[loggedIn])
    useEffect(() =>{  
     

     
           const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
        
            if(userDetails.is_employee)
            { dispatch(logOut())}
          }, 2000)
      
          return () => {
            clearTimeout(timeId)
          }
     
      
    },[userDetails])
   
    // end user details
    const onSubmit= async( data )=> {
        
           dispatch( login(data))
          
           setShowAlert(true)
           const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
            setShowAlert(false)
            dispatch(clearstate())
          }, 5000)
      
          return () => {
            clearTimeout(timeId)
          }
    }
    return(
        <>
       
        { loggedIn && userDetails.is_garage_owner && navigate('/workshop/owner/dashbord')}
         {isLoading ?   <img className='login' src="/images/giphy.gif" /> :
         <div className='login owner_login'>

          
           <Row className="justify-content-md-center">
               <Col sm={12}md={5}>
                  <div className='owner_or_employee active'>
                      <img src="/images/cycle one/service_icons/icon_2.png" />
                     <div className="inline-block"> Garage Owner </div>
                  </div>
                 
               </Col>
               <Col sm={12} md={5}>
                    <Link to='/login_process/Employlogin'>
                        <div className='owner_or_employee'>
                        <img src="/images/cycle one/service_icons/icon_2.png" />
                        <div className="inline-block"> Garage Employee   </div>
                        </div>
                     </Link>
                 
               </Col>
             
           </Row>
           {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }
           {showAlert &&loggedIn && userDetails.is_employee && <div className="msg-error"> You aren't a grage owner</div>}
           <Formik
             initialValues={{
                email: '',
                password: '',
                remember:false
               
               
              }}
              validationSchema={schema}
              onSubmit ={(values)=>{
                onSubmit(values);
             
              }}
             
            
           >
            {({errors, touched,  handleSubmit})=> (
            <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
           
                <div className={`main_input ${errors.email  && touched.email &&'input-error'}`} >
                    <label htmlFor='email'>Email</label>
                    <Field type='email' placeholder='handel@example.com'  name="email" autoComplete="off"   />
                       { touched.email && <div className='mark'>{errors.email ?  <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>}
                       {errors.email && touched.email && <><div className='error-text'> {errors.email}</div></> }
                    
                </div>
                
                    <div className={`main_input ${errors.password  && touched.password &&'input-error'}`}>
                        <label htmlFor='password'>Password</label>
                        <Field type='password' placeholder='Type your password'  name="password" autoComplete="off"/>
                        {touched.password && <div className='mark'>{errors.password  ? <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>} 
                        {errors.password && touched.password && <div className='error-text'> {errors.password}</div> }
                        </div>
                        <div className="action">
                        
                        <Link to='/login_process/reset'> <div className='blue forget_password '>Forgot Password !</div></Link>
                            <div>
                                <Field className='checkbox' type="checkbox" name='remember' /> 
                                <span>Remember Me For 7 days</span>
                            </div>
                            <div className='agree_privacy'>By logging in, you agree to our
                            <div><span className='blue'>Terms of Service </span> &amp; <span className='blue'>Privacy Policy</span></div>
                            </div>
                        
                            <input className='dark_button' type='submit' value='Login'/>
                        
                            <div className='sign_up'>Don't Have Account ! <Link to='/login_process/owner_sign_in'><span className='blue'>SIGNUP</span></Link> </div>
                            
                        </div>
           </form>
            )}

           </Formik>
           
         </div>
}
        </>
    )
}
export default Owner_login