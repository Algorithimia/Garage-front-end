import React, {useState} from 'react';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux'
import {editeEmploy} from '../../store/store slices/GOEmploy'
import Cookies from "universal-cookie";
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
import FlashMsg from './components/FlashMsg'

const ChangeEmployinfo = () => {

        // yup validation

     
        let schema = yup.object().shape({
      
           email: yup.string().email('Enter a Valid Email').required("Email is required"),
           password: yup.string().min(5,'password at least 5 characters').max(10, 'password max 10 characters'),
           confirm_password:yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
        
          
         });
   
         // end  yup 
  const cookies = new Cookies();
  const navigate = useNavigate()
  let location = useLocation()
  const dispatch = useDispatch()
  const {goEditeemploy, isLoading, error} = useSelector((state)=>state.GoEmploye)
  const [showAlert, setShowAlert]= useState(true)
  const[createflashmsg,setCreateFlashmsg] = useState(false)
  const[errorFlashmsg,setErrorFlashmsg] = useState(true)

const onSubmit= async data => {
  
      
      
       dispatch( editeEmploy(data))
       setErrorFlashmsg(true)
            
      
    
}
   //remove validation error 
   const removeError=(setFieldValue,setFieldTouched, name)=>{
    setFieldValue(name, '', false);
    setFieldTouched(name, false,false)
  
  }
  return <div className='opacity'>

      <div className='change'>
          <div className='title'>
          CHANGE 
            <img src={location.state.employ.avatar} />
            <span> {location.state.employ.name} </span>
             Email/PASSWORD 
          </div>
          <Formik
             initialValues={{
              workshop_id: cookies.get("workshop").id,
              employee_id:location.state.employ.id,
              password:undefined, 
              confirm_password:undefined,
            
              email:location.state.employ.email,
               
              }}
            
            
              validationSchema={() =>schema}
              onSubmit ={(values)=>{
               setCreateFlashmsg(true)
          
              }}
             
            
           >
            {({errors, touched, setFieldTouched,  handleSubmit,setFieldValue, values})=> (
                <form  className="form-validator" onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
                   {createflashmsg&&<FlashMsg 
                            title={`You will Edite Employ   with name ${location.state.employ.name} !`}
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setCreateFlashmsg}
                            func={onSubmit}
                            func_val={values}
                            icontype='info-icon'
                    />}
         
          {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }<br/>
            {/* <div className='input'>
              <input  placeholder='Email' name='email'  value={email} onChange={e=>onChange(e)} required/>

            </div> */}
            <div className={`input ${errors.email  && touched.email &&'input-error'}`} >
                   
                    <Field type='email' placeholder='Email'  name="email" autoComplete="off"   />
                       { touched.email && <div className='mark'>{errors.email ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'email')}/></span>: <FcCheckmark />}</div>}
                       {errors.email && touched.email && <><div className='error-text'> {errors.email}</div></> }
                    
           </div>
              <div className={`input ${errors.password  && touched.password &&'input-error'}`}>
                       
                        <Field type='password' placeholder='PASSWORD'  name="password" autoComplete="off"/>
                        {touched.password && <div className='mark'>{errors.password  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'password')}/></span>: <FcCheckmark />}</div>} 
                        {errors.password && touched.password && <div className='error-text'> {errors.password}</div> }
              </div>
              <div className={`input ${errors.confirm_password  && touched.confirm_password &&'input-error'}`}>
                        
                          <Field  type='password' placeholder='confirm_password'  name="confirm_password"  />
                          {touched.confirm_password && <div className='mark'>{errors.confirm_password  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'confirm_password')}/></span>: <FcCheckmark />}</div>} 
                          {errors.confirm_password && touched.confirm_password && <div className='error-text'> {errors.confirm_password}</div> }
                      

                  </div>
           
            <div className='buttons'>
              {/* <Link to='/workshop/owner/employes'><button className='button'>DISCARD </button></Link> */}
              {/* <Link to='/workshop/owner/employes'> <input className='button blue' type='submit' value='SAVE' /></Link> */}

              <Link to='/workshop/owner/employes'><button className='button'>DISCARD </button></Link>
              <input className='button blue' type='submit' value='SAVE' />
            </div>
          </form>
          )}
          </Formik>

      </div>
      { goEditeemploy ? <Navigate to="/workshop/owner/employes" > </Navigate> : '' }
  </div>;
};

export default ChangeEmployinfo;
