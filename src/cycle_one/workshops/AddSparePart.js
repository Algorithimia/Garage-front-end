import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Cookies from "universal-cookie";
import {addSparePart, getSparePartsTypes} from '../../store/store slices/InventorySice'
import { useDispatch,useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { FcCheckmark } from "react-icons/fc";
import {AiOutlineClose} from "react-icons/ai"
//formik
import { Formik, Field, Form } from 'formik';
// yup validation
import * as yup from 'yup';
import FlashMsg from './components/FlashMsg'

const AddSparePart = () => {
      // yup validation

   
      let schema = yup.object().shape({
         title: yup.string().required('Name is required'), 
         unit_price: yup.number().typeError('Price must be a number').required('Price  is required'),
         type_id: yup.number().required('you must select a type'),
         quantity: yup.number().typeError('Quantity must be a number').required('Quantity  is required'),
        
       });
 
       // end  yup 
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [showAlert, setShowAlert]= useState(true)
    const[createflashmsg,setCreateFlashmsg] = useState(false)
    const[errorFlashmsg,setErrorFlashmsg] = useState(true)
    const cookies = new Cookies();
    const { created,typesLoading,sparepartstypes, error}= useSelector((state)=>state.inventory)
    const [formData, setFormData] = useState({
        galleries :[],
        is_purchase:false
     
    })
    console.log(formData)
    const { galleries, is_purchase}=formData

    const checkChange=e=>setFormData({...formData, [e.target.name]: e.target.checked})
    const imgChange=e=>setFormData({...formData, [e.target.name]:{image :e.target.files[0]}})
    useEffect(() =>{
        dispatch(getSparePartsTypes())
      
    
      },[dispatch])
    const onSubmit= async data => {
        
        dispatch(addSparePart({...data, galleries:galleries, is_purchase:is_purchase}))
        setErrorFlashmsg(true)
       
       
    }
    const renderedTypes=!typesLoading?sparepartstypes.map(type=><option key={type.id} value={type.id}>{type.title}</option>) : 'Loading'
       //remove validation error 
   const removeError=(setFieldValue,setFieldTouched, name)=>{
    setFieldValue(name, '', false);
    setFieldTouched(name, false,false)
  
  }
    return (
        <div className='add_sparePart'>
            <div className='header'>
            ADD SPARE PART
 
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
                workshop_id: cookies.get("workshop").id,
                type_id:'',
                title: '',
                description:'',
                unit_price: '',
                quantity: '',
            
               
              }}
            
            
              validationSchema={() =>schema}
              onSubmit ={(values)=>{
               setCreateFlashmsg(true)
              
          
              }}
             
            
           >
            {({errors, touched, setFieldTouched,  handleSubmit,setFieldValue, values})=> (
                <form onSubmit={(e)=>{e.preventDefault(); handleSubmit()}}  autoComplete="off">
                     {createflashmsg&&<FlashMsg 
                            title={`You will add a SPARE PART to  workshop ${cookies.get("workshop").title} !`}
                            img={'/images/msgIcons/info.svg'}
                            setFlashmsg={setCreateFlashmsg}
                            func={onSubmit}
                            func_val={values}
                            icontype='info-icon'
                    />}
                    <div className='upload'
                    onClick={()=> document.getElementById("my_file").click()}>

                        <img src='/images/cycle one/img.png'/>
                        <span>UPLOAD PHOTOS</span>
                    </div>
        
                <input type="file" id="my_file" style={{display: "none"}} name='galleries'   onChange={(e)=>imgChange(e)} />

            
                <div className='input_Section'>
                    <Row>
                        <Col md={6} lg={4}>
                            <div className='main_input'>
                                <label>Select Type</label>
                                <input   type='text' disabled /> 
                                <Field  as="select" name='type_id'   >
                                        <option hidden >Select Type</option>
                                        {renderedTypes}
                                </Field>
                        </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className={`main_input ${errors.title  && touched.title &&'input-error'}`}>
                                        <label>Part Name</label>
                                        <Field type='text'placeholder='Part Name'  name='title' autoComplete="off"   />
                                        { touched.title && <div className='mark'>{errors.title ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'bonus')}/></span>: <FcCheckmark />}</div>}
                                        {errors.title && touched.title && <><div className='error-text'> {errors.title}</div></> }
                                
                           </div>
                        </Col>
                        
                        <Col md={6} lg={4}>
                            <div className='main_input'>
                                <label>MRP</label>
                                <input   placeholder='Part MRP ??????'/> 
                        </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className={`main_input ${errors.quantity  && touched.quantity &&'input-error'}`}>
                                            <label>QUANTITY</label>
                                            <Field type='number'placeholder='QUANTITY'  name='quantity' autoComplete="off"   />
                                            { touched.quantity && <div className='mark'>{errors.quantity ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'bonus')}/></span>: <FcCheckmark />}</div>}
                                            {errors.quantity && touched.quantity && <><div className='error-text'> {errors.quantity}</div></> }
                                    
                            </div>
                
                        </Col>
                        <Col md={6} lg={4}>
                            <div className={`main_input ${errors.unit_price  && touched.unit_price &&'input-error'}`}>
                                            <label>Price</label>
                                            <Field type='number'placeholder='000$'  name='unit_price' autoComplete="off"   />
                                            { touched.unit_price && <div className='mark'>{errors.unit_price ?  <span className='validation-error'><AiOutlineClose onClick={()=> removeError(setFieldValue,setFieldTouched,'bonus')}/></span>: <FcCheckmark />}</div>}
                                            {errors.unit_price && touched.unit_price && <><div className='error-text'> {errors.unit_price}</div></> }
                                    
                            </div>
                        </Col>
                        <Col md={6} lg={4}>
                            <div className='main_input'>
                                <label>BUY FROM</label>
                                <input   type='text' placeholder='SHOP  ??????'/> 
                        </div>

                        </Col>
                        <Col md={12} lg={8}>
                            <div className='main_input'>
                                <label>PURCHASE AVAILABILITY</label>
                                <div  className='wider_input' >
                                <Row>
                                <Col >
                                    <input type="checkbox"    name='is_purchase'  checked={is_purchase} onChange={(e)=>checkChange(e)} />
                                    
                                
                                <label for="vehicle1"> Available to be purchased</label>
                                </Col>    
                                </Row>  
                                
                            
                                    
                                </div> 
                        </div>
                        </Col>
                        <Col md={12} lg={8}>
                            {/* <div className='main_input'>
                                <label className='textarea_label'>Part Description</label>
                                <textarea className='textareaa'  placeholder='Part Description'   name='description'   required/> 
                            </div> */}
                        <div className={`main_input `}>
                                            <label className='textarea_label'>Description</label>
                                            <Field  as="textarea" className='textareaa' type='number'placeholder='Part Description'  name='description' autoComplete="off"   />
                                         
                                    
                            </div>
                        </Col>
                    </Row>
                    <input  className='btn' type='submit' value='Create New Part' />

                </div>
            </form>
              )}
              </Formik>
            </div> 

          {created && navigate('/workshop/owner/manageinventory')}
           
        </div>
    )
}

export default AddSparePart
