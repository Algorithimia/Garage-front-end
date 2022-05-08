import React,{useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import AssignedCheck from './components/AssignedCheck'
import{getUserDetails} from '../../store/store slices/detailUser'
import {getaddress} from '../../store/store slices/addreseSlice'
import { useDispatch,useSelector } from 'react-redux'
import {createEmploy} from '../../store/store slices/GOEmploy'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
import Cookies from "universal-cookie";

//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
const AddNewEmploy = () => {
       // yup validation

       const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
       let schema = yup.object().shape({
     
          email: yup.string().email('Enter a Valid Email').required("Email is required"),
          password: yup.string().required('password is required').min(5,'password at least 5 characters').max(10, 'password max 10 characters'),
          confirm_password:yup.string().required('confirm password is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
          name: yup.string().required('Name is required'),
          phone:yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),    
          country_id:yup.string().required("Please select a country"),
          salary: yup.number().typeError('Salary must be a number').required('Salary  is required'),
          bonus:yup.number().typeError('Bonus must be a number').required('Bonus  is required')
         
        });
  
        // end  yup 
    const cookies = new Cookies();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {userDetails}= useSelector((state)=>state.userDetails)
    const {loggedIn}= useSelector((state)=>state.auth)
    const {gocreateemploy, isLoading, error} = useSelector((state)=>state.GoEmploye)
    const [showAlert, setShowAlert]= useState(true)
    // const [formData, setFormData] = useState({
    //     workshop_id: cookies.get("workshop").id,
    //     email:'',
    //     password: '',
    //     confirm_password:'',
    //     name: '',
    //     phone: '',
    //     country_id:'',
    //     salary:'',
    //     bonus:''
    // })
    // const {workshop_id,email, name,phone , password, confirm_password,country_id,salary, bonus } = formData
    const {addressList}= useSelector((state)=>state.address)
    useEffect(() =>{
        dispatch(getaddress()); 
        
       
       
       
    
      },[dispatch])
  
     
    //   let renderedWorkshops = userDetails.map((workshop)=><option key={workshop.id} value={workshop.id}>{workshop.title}</option>)
  
    //   const onChange=e=>setFormData({...formData, [e.target.name]: e.target.value})
      const onSubmit= async data => {
     
       
            //   console.log(formData)
            //   console.log( grageOwnerRegister)
            
              dispatch( createEmploy(data))
              
              //for allert 
              setShowAlert(true)
              const timeId = setTimeout(() => {
                // After 3 seconds set the showAlert value to false
                setShowAlert(false)
              }, 5000)
          
              return () => {
                clearTimeout(timeId)
              }
              
         //    dispatch( createEmploy(formData))
              
            
          }
      
      
    
      const  countries = addressList.map((country=> {
        return <option key={country.id} value={country.id} >{country.name}</option>
        
   }))
   //find phone code for selected country
   const phoneCode = (country_id) =>{
       
    let code=   country_id !== '' ?  addressList.find(country => country.id == country_id).phone_code:''
    return code    
   }
   //remove validation error 
   const removeError=(setFieldValue,setFieldTouched, name)=>{
    setFieldValue(name, '', false);
    setFieldTouched(name, false,false)
  
  }
 
      return (
          <>
        
         { isLoading ? <img className='loading-img' src="/images/giphy.gif" /> :
        <div className='add_newEmploy'>
            <div className='header'>
           
            ADD NEW EMPLOYEE
           
            </div>
            <div className='body'>
            {showAlert && error && <div className='msg-error'>{ Object.values(error)}</div> }<br/>
            <Formik
             initialValues={{
                workshop_id: cookies.get("workshop").id,
                email:'',
                password: '',
                confirm_password:'',
                name: '',
                phone: '',
                country_id:'',
                salary:'',
                bonus:''
               
              }}
            
            
              validationSchema={() =>schema}
              onSubmit ={(values)=>{
            //   setCreateFlashmsg(true)
              console.log(values)
              }}
             
            
           >
            {({errors, touched, setFieldTouched,  handleSubmit,setFieldValue, values})=> (
                <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
                <div className='input_row'>
                EMPLOYEE INFO
                
                <Row>
                    <Col md={6} lg={4}>
                  
                        <div  className={`main_input ${ errors.name && touched.name &&'input-error'}`}>
                                    <label>Employee Name</label>
                                    <Field  type='text' name="name"  placeholder='Employee Name'/>
                                    {touched.name && <div className='mark'>{errors.name  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'name')} /></span>: <FcCheckmark />}</div>} 
                                {errors.name && touched.name && <div className='error-text'> {errors.name}</div> }
                                </div>
                    </Col>
                    <Col md={6} lg={4}>                   
                        <div   className={`main_input left_select ${ errors.country_id && touched.country_id &&'input-error'}`} >
                                        <label>Country</label>
                                        <input type='text' placeholder='' disabled/>
                                        <div className={` address-id ${errors.country_id  && touched.country_id &&'input-error'}`}>
                                            <Field  as="select" name='country_id'   >
                                            <option hidden >Country</option>
                                                {countries}
                                            </Field>   
                                        </div>
                       </div>
                    </Col>
            
                    <Col md={6} lg={4}>
                                 <div className={`main_input ${errors.salary  && touched.salary &&'input-error'}`}>
                                    <label>Salary</label>
                                    <Field type='text'placeholder='2000$' name='salary' autoComplete="off"   />
                                    { touched.salary && <div className='mark'>{errors.salary ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'salary')}/></span>: <FcCheckmark />}</div>}
                                    {errors.salary && touched.salary && <><div className='error-text'> {errors.salary}</div></> }
                            
                                </div>
                        
                    </Col>
                    <Col md={6} lg={4}>
                        <div className={`main_input ${errors.bonus  && touched.bonus &&'input-error'}`}>
                                    <label>Bonus salary</label>
                                    <Field type='text'placeholder='500 $' name='bonus' autoComplete="off"   />
                                    { touched.bonus && <div className='mark'>{errors.bonus ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'bonus')}/></span>: <FcCheckmark />}</div>}
                                    {errors.bonus && touched.bonus && <><div className='error-text'> {errors.bonus}</div></> }
                            
                        </div>

                    </Col>
                    
                    <Col md={6} lg={4}>
                            <div className={`main_input ${errors.phone  && touched.phone &&'input-error'}`}>
                                <label>Phone Number</label>
                                <input className='phone-code'   maxLength="3"  placeholder='+20' 
                               value={ phoneCode(values.country_id)}  
                                name="code" 
                                />
                                
                                    
                                <Field className='phone-number'  type='tel' placeholder='1111111111'  name="phone"  />
                                {touched.phone && <div className='mark'>{errors.phone  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'phone')}/></span>: <FcCheckmark />}</div>} 
                                    {errors.phone && touched.phone && <div className='error-text'> {errors.phone}</div> }
                                
                            </div>
                    </Col> 
                </Row>
                
                </div>
                <div className='input_row'>
                EMPLOYEE LOGIN INFORMATION
                <Row>
                    <Col md={6} lg={4}>
                    <div className={`main_input ${errors.email  && touched.email &&'input-error'}`} >
                    <label htmlFor='email'>Email ID</label>
                    <Field type='email' placeholder='handel@example.com'  name="email" autoComplete="off"   />
                       { touched.email && <div className='mark'>{errors.email ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'email')}/></span>: <FcCheckmark />}</div>}
                       {errors.email && touched.email && <><div className='error-text'> {errors.email}</div></> }
                    
           </div>
                    </Col>
                    <Col md={6} lg={4}>
                     <div className={`main_input ${errors.password  && touched.password &&'input-error'}`}>
                        <label htmlFor='password'>Password</label>
                        <Field type='password' placeholder='●●●●●●●●●●●'  name="password" autoComplete="off"/>
                        {touched.password && <div className='mark'>{errors.password  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'password')}/></span>: <FcCheckmark />}</div>} 
                        {errors.password && touched.password && <div className='error-text'> {errors.password}</div> }
                    </div>
                    </Col>
                    <Col md={6} lg={4}>
                         <div className={`main_input ${errors.confirm_password  && touched.confirm_password &&'input-error'}`}>
                                <label>Confirm Password</label>
                                <Field  type='password' placeholder='●●●●●●●●●●●'  name="confirm_password"  />
                                {touched.confirm_password && <div className='mark'>{errors.confirm_password  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'confirm_password')}/></span>: <FcCheckmark />}</div>} 
                                {errors.confirm_password && touched.confirm_password && <div className='error-text'> {errors.confirm_password}</div> }
                            

                        </div>
                    </Col>
                </Row>
                
                </div>
                <div className='system_tasks'>
                <div className='title'> SYSTEM TASKS </div>
                <div >
                            <label>Assigned Sections</label>
                            <div className='check_box'>
                                <Row>
                                    <Col md={6} lg={3}>
                                    
                                    <AssignedCheck type='VEHICLES' /> 
                                    <AssignedCheck type='WORK ORDERS' /> 
                                    <AssignedCheck type='CUSTOMERS' />  
                                    </Col>

                                    <Col md={6} lg={3}>
                                        <AssignedCheck type='INVENTORY' />  
                                        <AssignedCheck type='EMPLOYEES' />  
                                        <AssignedCheck type='BUSSINESSES' />  
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <AssignedCheck type='FINANCE' />  
                                        <AssignedCheck type='APPOINTMENT' />  
                                        <AssignedCheck type='MARKETING' />  
                                    
                                    </Col>
                                    <Col md={6} lg={3}>
                                        <AssignedCheck type='ASSETS' />  
                                        <AssignedCheck type='SETTING' /> 
                                    </Col>
                                </Row>
                            </div>
                            {/* <Link to='/workshop/owner/employes'> */}
                            <input className='btn' type='submit' value='SAVE DETAILS' />
                            {/* </Link> */}
                        
                        </div>

                </div>
                </form>
            )}
        </Formik>
            </div>
           { gocreateemploy ?  navigate("/workshop/owner/employes") : '' }
           {!loggedIn ? navigate('/login_process/owner_login'): ''}
        </div>
        
        }
         
        </>
        
    )
}

export default AddNewEmploy