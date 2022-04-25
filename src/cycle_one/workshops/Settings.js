import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Row, Col} from 'react-bootstrap'
import {MdPhotoCamera} from 'react-icons/md'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
import { useDispatch,useSelector } from 'react-redux'
import {updateGrageOwner} from '../../store/store slices/detailUser'
//formik
import { useField,Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';


const Settings = () => {
         // yup validation
         const {addressList}= useSelector((state)=>state.address)

         const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
         let schema = yup.object().shape({
            email: yup.string().email('Enter a Valid Email').required("Email is required"),
            name: yup.string().required('Name is required'),
            phone:yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),    
          });
    
          // end  yup
          const {userDetails , isLoading, updated ,error}= useSelector((state)=>state.userDetails)
          const navigate = useNavigate() 
          const dispatch = useDispatch()
          const [showAlert, setShowAlert]= useState(true)

    //         const phoneCode = (country_id) =>{
       
    //  let code=   country_id !== '' ?  addressList.find(country => country.id == country_id).phone_code:''
    //  return code    
    // }
    const onSubmit= async data => {
        dispatch(updateGrageOwner(data));
        setShowAlert(true)
        const timeId = setTimeout(() => {
            // After 3 seconds set the showAlert value to false
            setShowAlert(false)
         
          }, 5000)
      
          return () => {
            clearTimeout(timeId)
          }
     
        
    }
    return (
        <>
        { !userDetails.name  ?  <img className='loading-img' src="/images/giphy.gif" /> :

            <div className='settings'>
            <div className='header'>
               PREFERENCE SETTING
               <span className='right'>
                   YOUR SUBSCRIPTION ENDS IN 15 DAYS
                  <Link to='/workshop/owner/subscribtion'><span className='under_line'>UPGRADE</span></Link> 
                   
               </span>
    
              </div>
              <Formik
                initialValues={{
                 
                     name:  userDetails.email,
                    email:  userDetails.email,
                    oldEmail:  userDetails.email,
                    phone: userDetails.phone.split(" ")[1],
                    country_id:1
                   
                  
                  
                 }}
                 validationSchema={schema}
                 onSubmit ={(values)=>{
                    onSubmit(values);
                   
                
                 }}
                
               
              >
               
               {({errors, touched,  handleSubmit, values})=> (
               <form className='form-validator' onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
                     { console.log(userDetails&&userDetails)}
                     <div className='workshop_info'>
                  <Row>
                      <Col sm={12} lg={4}>
                         <div className='left'>
                             <div>OWNER INFO</div>
                             
                         </div>
                      </Col>
                      <Col sm={12} lg={8}>
                        <div className='right'>
                        <div className={`main_input ${errors.name  && touched.name &&'input-error'}`} >
                           <label>Owner Name</label>
                           {console.log(values)}
                               <Field type='text' placeholder='Owner Name' value={values.name} name="name" autoComplete="off"   />
                               { touched.name && <div className='mark'>{errors.name ?  <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>}
                               {errors.name && touched.name && <><div className='error-text'> {errors.name}</div></> }
                               
                       </div>
                         
                 <div className={`main_input ${errors.phone  && touched.phone &&'input-error'}`}>
                  <label>Phone Number</label>
                  
               
                  <Field   type='tel' placeholder='1111111111'  name="phone"  />
                  {touched.phone && <div className='mark'>{errors.phone  ? <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>} 
                   {errors.phone && touched.phone && <div className='error-text'> {errors.phone}</div> }
                  
              </div>
                       
                       
                       <div className={`main_input ${errors.email  && touched.email &&'input-error'}`} >
                           <label>Email</label>
                               <Field type='email' placeholder='handel@example.com'  name="email" autoComplete="off"   />
                               { touched.email && <div className='mark'>{errors.email ?  <span className='validation-error'><AiOutlineClose /></span>: <FcCheckmark />}</div>}
                               {errors.email && touched.email && <><div className='error-text'> {errors.email}</div></> }
                               
                       </div>
                        
                            <Link to='/login_process/reset'><span>RESET PASSWORD</span></Link>
                            
                            
                        </div>
                        {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }<br/>
                        <input className='submit-settings' type='submit' value='SAVE DETAILS' />
                      </Col>
                  </Row>
                 
   
              </div>
              </form>
                  )}
              </Formik>
              {updated && navigate('/workshop/owner/dashbord')}
           </div>
        }
        </>
      
    )
}

export default Settings
