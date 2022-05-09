import React,{useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import AssignedCheck from './components/AssignedCheck'
import{getUserDetails} from '../../store/store slices/detailUser'
import {getaddress} from '../../store/store slices/addreseSlice'
import { useDispatch,useSelector } from 'react-redux'
import {editeEmploy} from '../../store/store slices/GOEmploy'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"


//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';

import Cookies from "universal-cookie";
import FlashMsg from './components/FlashMsg'


const EditeEmploy = () => {
         // yup validation

         const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
         let schema = yup.object().shape({
       
          
           
            name: yup.string().required('Name is required'),
            phone:yup.string().required('Phone is required').matches(phoneRegExp, 'Phone number is not valid'),    
            salary: yup.number().typeError('Salary must be a number').required('Salary  is required'),
            bonus:yup.number().typeError('Bonus must be a number').required('Bonus  is required')
           
          });
    
          // end  yup 
    const cookies = new Cookies();
    const navigate = useNavigate()
    let location = useLocation()
    const dispatch = useDispatch()
    const [showAlert, setShowAlert]= useState(true)
    const {userDetails}= useSelector((state)=>state.userDetails)
    const {goEditeemploy, isLoading, error} = useSelector((state)=>state.GoEmploye)
    const[createflashmsg,setCreateFlashmsg] = useState(false)
    const[errorFlashmsg,setErrorFlashmsg] = useState(true)
   
    const {addressList}= useSelector((state)=>state.address)
    useEffect(() =>{
        dispatch(getaddress());
       // dispatch(getUserDetails());
     
        
       
    
      },[dispatch])
      
    //   let renderedWorkshops = userDetails.map((workshop)=><option key={workshop.id} value={workshop.id}>{workshop.title}</option>)
  
    
      const onSubmit= async data=> {
       
            
             dispatch( editeEmploy(data))
             setErrorFlashmsg(true)
            
          
      }
      
     
      const  countries = addressList.map((country=> {
        return <option key={country.id} value={country.id} >{country.name}</option>
        
   }))
   
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
                
           Edite EMPLOYEE
            </div>
            <div className='body'>
            {errorFlashmsg && error && <FlashMsg 
                      title={`${Object.values(error)} !`}
                      img={'/images/msgIcons/error.svg'}
                      setFlashmsg={setErrorFlashmsg}

                      icontype='error-icon'
              />}
            <Formik
             initialValues={{
                workshop_id:cookies.get("workshop").id,
                name: location.state.employ.name,
                code : location.state.employ.phone.split(" ")[0],
                phone: location.state.employ.phone.split(" ")[1],
                country_id:addressList.find(country=>country.phone_code ==  location.state.employ.phone.split(" ")[0])?addressList.find(country=>country.phone_code ==  location.state.employ.phone.split(" ")[0]).id:'',
                salary:location.state.employ.salary,
                bonus:location.state.employ.bonus,
                employee_id:location.state.employ.id,
            
               
              }}
            
            
              validationSchema={() =>schema}
              onSubmit ={(values)=>{
               setCreateFlashmsg(true)
               console.log(values)
          
              }}
             
            
           >
            {({errors, touched, setFieldTouched,  handleSubmit,setFieldValue, values})=> (
                <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
                     {createflashmsg&&<FlashMsg 
                            title={`You will Edite Employ   with name ${values.name} !`}
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setCreateFlashmsg}
                            func={onSubmit}
                            func_val={values}
                            icontype='info-icon'
                    />}
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
                                        <div className={` address-id ${errors.country_id  && touched.country_id &&'input-error'}`} >
                                          
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
                                <Field className='phone-code'   maxLength="3"  placeholder='+20' 
                                
                                name="code" 
                                />
                                
                                    
                                <Field className='phone-number'  type='tel' placeholder='1111111111'  name="phone"  />
                                {touched.phone && <div className='mark'>{errors.phone  ? <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'phone')}/></span>: <FcCheckmark />}</div>} 
                                    {errors.phone && touched.phone && <div className='error-text'> {errors.phone}</div> }
                                
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
            { goEditeemploy ?  navigate("/workshop/owner/employes") : '' }
        </div>
        }
        </>
    )
}

export default EditeEmploy
